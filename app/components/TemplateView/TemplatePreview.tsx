"use client";

import { useEffect, useState } from 'react';
import { useTemplateContext } from '../../context/TemplateContext';

export function formatDate(date: string): string | null {
  const parsedDate = new Date(`${date}T00:00:00`);

  if (isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric',})
}

export default function TemplatePreview() {
  const { selectedTemplate } = useTemplateContext();
  const [TemplateComponent, setTemplateComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadTemplateComponent = async () => {
      if (!selectedTemplate) {
        setTemplateComponent(null);
        return;
      }

      try {
        const component = await import(`../templates/${selectedTemplate}`);
        setTemplateComponent(() => component.default);
      } catch (error) {
        console.error('Error loading template:', error);
        setTemplateComponent(null);
      }
    };

    loadTemplateComponent();
  }, [selectedTemplate]);

  return (
    <div>
      <div id="templatePreview">
        {TemplateComponent ? (
          <TemplateComponent />
        ) : (
          <p>Select a template to preview it here.</p>
        )}
      </div>
    </div>
  );
}
