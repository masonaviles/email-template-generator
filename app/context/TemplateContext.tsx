"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { TemplateData } from '../types/template';

interface TemplateContextType {
  templateData: TemplateData;
  selectedTemplate: string | null;
  setSelectedTemplate: (template: string | null) => void;
  updateTemplateData: (key: keyof TemplateData, value: string | string[]) => void;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

// TemplateProvider component to wrap application
export function TemplateProvider({ children }: { children: ReactNode }) {
  // Initialize the state for template data and selected template
  const [templateData, setTemplateData] = useState<TemplateData>({
    projectName: '',
    kickoffDate: '',
    dueDate: '',
    launchDate: '',
    producerName: '',
    projectDescription: '',
    milestonesSchedule: '',
    planetLink: '',
    icServerRequestLink: '',
    templateName: '',
    templateSubject: '',
    listOfReviewers: [],
    projectOverview: '',
    projectBrief: '',
    newScopeSections: [],
    updateScopeSections: [],
    listChoice: '',
    listOfGeos: [],
  });

  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const updateTemplateData = (key: keyof TemplateData, value: string | string[]) => {
    setTemplateData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <TemplateContext.Provider value={{ templateData, selectedTemplate, setSelectedTemplate, updateTemplateData }}>
      {children}
    </TemplateContext.Provider>
  );
}

export function useTemplateContext() {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error('useTemplateContext must be used within a TemplateProvider');
  }
  return context;
}
