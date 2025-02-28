"use client";

import { useTemplateContext } from '../../context/TemplateContext';
import { useEffect, useState } from 'react';

interface TemplateNameData {
  filename: string;
  customName?: string;
}

export default function TemplateList() {
  const { setSelectedTemplate } = useTemplateContext();
  const [templateNameData, setTemplateNameData] = useState<TemplateNameData[]>([]);

  // Fetch templates from the API route
  useEffect(() => {
    const fetchTemplates = async () => {
      const response = await fetch('/api/templates');
      const fetchedTemplateNameData = await response.json();
      setTemplateNameData(fetchedTemplateNameData);
    };
    fetchTemplates();
  }, []);

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplate(e.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select Template</h2>
      <select
        className="w-full p-2 border border-gray-300 h-10 rounded cursor-pointer"
        onChange={handleTemplateChange}
      >
        <option value="">-- Select a Template --</option>
        {templateNameData.map((template) => (
          <option key={template.filename} value={template.filename}>
            {template.customName ? template.customName : template.filename.replace(/([A-Z])/g, ' $1').trim()}
          </option>
        ))}
      </select>
    </div>
  );
}
