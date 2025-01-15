"use client";

import { useState, useEffect } from 'react';
import { useTemplateContext } from '../../context/TemplateContext';
import { ScopeSection } from '../../types/template';
import NewScopeSectionForm from '../FormFields/NewScopeSectionForm';
import UpdateScopeSectionForm from '../FormFields/UpdateScopeSectionForm';
import ListOfGeosForm from '../FormFields/ListOfGeosForm';
import ProjectControls from '../ProjectControls/ProjectControls';
import { Project } from '../../types/project';
import ExportImport from '../ExportImport/ExportImport';

export default function TemplateForm() {
  const { templateData, updateTemplateData } = useTemplateContext();
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<string | null>(null);

  const formFieldClass = "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
  const formLabelClass = "block text-sm font-bold";

  useEffect(() => {
    // Load saved projects from localStorage on component mount
    const savedProjects = JSON.parse(localStorage.getItem('projectList') || '[]');
    setProjectList(savedProjects);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateTemplateData(name as keyof typeof templateData, value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateTemplateData(name as keyof typeof templateData, value);
  };

  const saveProject = () => {
    const updatedProjects = [...projectList];
    const currentDate = new Date().toLocaleString();
    const baseProjectName = templateData.projectName || "Untitled";
    let projectName = `${baseProjectName} - ${currentDate}`;

    const findUniqueProjectName = (name: string) => {
      let uniqueName = name;
      let counter = 1;
      while (updatedProjects.some((proj) => proj.name === uniqueName)) {
        uniqueName = `${name} (${counter})`;
        counter++;
      }
      return uniqueName;
    };

    if (currentProject) {
      const index = updatedProjects.findIndex(proj => proj.name === currentProject);
      updatedProjects[index].data = templateData;
    } else {
      projectName = findUniqueProjectName(projectName);
      updatedProjects.push({ name: projectName, data: templateData });
      setCurrentProject(projectName);
    }

    setProjectList(updatedProjects);
    localStorage.setItem('projectList', JSON.stringify(updatedProjects));
  };

  const loadProject = (projectName: string) => {
    const selectedProject = projectList.find(proj => proj.name === projectName);
    if (selectedProject) {
      Object.entries(selectedProject.data).forEach(([key, value]) => {
        updateTemplateData(key as keyof typeof templateData, value as string);
      });
      setCurrentProject(projectName);
    }
  };

  const deleteProject = (projectName: string) => {
    const updatedProjects = projectList.filter(proj => proj.name !== projectName);
    setProjectList(updatedProjects);
    localStorage.setItem('projectList', JSON.stringify(updatedProjects));
    if (currentProject === projectName) {
      setCurrentProject(null);
      clearForm();
    }
  };

  const clearForm = () => {
    Object.keys(templateData).forEach((key) => {
      updateTemplateData(key as keyof typeof templateData, '');
    });
  };

  const handleNewScopeSectionChange = (index: number, field: keyof ScopeSection, value: string | number) => {
    const updatedSections = [...templateData.newScopeSections];
    updatedSections[index] = { ...updatedSections[index], [field]: value };
    updateTemplateData("newScopeSections", updatedSections as unknown as string);
  };

  const addNewScopeSection = () => {
    const newSection: ScopeSection = { url: '', numScreens: 0, numVideos: 0, updates: [] };
    updateTemplateData("newScopeSections", [...templateData.newScopeSections, newSection] as unknown as string);
  };

  const removeNewScopeSection = (index: number) => {
    const updatedSections = templateData.newScopeSections.filter((_, i) => i !== index);
    updateTemplateData("newScopeSections", updatedSections as unknown as string);
  };

  const handleNewUpdateChange = (index: number, updateIndex: number, value: string) => {
    const updatedSections = [...templateData.newScopeSections];
    updatedSections[index].updates[updateIndex] = value;
    updateTemplateData("newScopeSections", updatedSections as unknown as string);
  };

  const addNewUpdate = (index: number) => {
    const updatedSections = [...templateData.newScopeSections];
    updatedSections[index].updates.push('');
    updateTemplateData("newScopeSections", updatedSections as unknown as string);
  };

  const handleUpdateScopeSectionChange = (index: number, field: keyof ScopeSection, value: string | number) => {
    const updatedSections = [...templateData.updateScopeSections];
    updatedSections[index] = { ...updatedSections[index], [field]: value };
    updateTemplateData("updateScopeSections", updatedSections as unknown as string);
  };

  const addUpdateScopeSection = () => {
    const newSection: ScopeSection = { url: '', numScreens: 0, numVideos: 0, updates: [] };
    updateTemplateData("updateScopeSections", [...templateData.updateScopeSections, newSection] as unknown as string);
  };

  const removeUpdateScopeSection = (index: number) => {
    const updatedSections = templateData.updateScopeSections.filter((_, i) => i !== index);
    updateTemplateData("updateScopeSections", updatedSections as unknown as string);
  };

  const handleUpdateUpdateChange = (index: number, updateIndex: number, value: string) => {
    const updatedSections = [...templateData.updateScopeSections];
    updatedSections[index].updates[updateIndex] = value;
    updateTemplateData("updateScopeSections", updatedSections as unknown as string);
  };

  const addUpdateUpdate = (index: number) => {
    const updatedSections = [...templateData.updateScopeSections];
    updatedSections[index].updates.push('');
    updateTemplateData("updateScopeSections", updatedSections as unknown as string);
  };

  return (
    <div className="edit-project-constant-form shadow-md rounded-lg p-6 bg-gray-50">

      <form className="space-y-4">

        <ExportImport />
        <ProjectControls
          projectList={projectList}
          currentProject={currentProject}
          loadProject={loadProject}
          saveProject={saveProject}
          deleteProject={deleteProject}
          clearForm={clearForm}
        />
        <h1 className="text-2xl font-bold mb-6 text-center mt-10">Edit Project Constants</h1>
        <div>
          <label className={formLabelClass}>Producer Name</label>
          <input
            type="text"
            name="producerName"
            value={templateData.producerName}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <div>
          <label className={formLabelClass}>Project Name</label>
          <input
            type="text"
            name="projectName"
            value={templateData.projectName}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <div>
          <label className={formLabelClass}>Kickoff Date</label>
          <input
            type="date"
            name="kickoffDate"
            value={templateData.kickoffDate}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <div>
          <label className={formLabelClass}>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={templateData.dueDate}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <div>
          <label className={formLabelClass}>Launch Date</label>
          <input
            type="date"
            name="launchDate"
            value={templateData.launchDate}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <div>
          <label className={formLabelClass}>Project Description / Scope</label>
          <textarea
            name="projectDescription"
            value={templateData.projectDescription}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <div>
          <label className={formLabelClass}>Milestones Schedule</label>
          <textarea
            name="milestonesSchedule"
            value={templateData.milestonesSchedule}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <div>
          <label className={formLabelClass}>PLANET Project Link</label>
          <input
            type="url"
            name="planetLink"
            value={templateData.planetLink}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <div>
           <label className={formLabelClass}>PLANET ic Server Request Link</label>
           <input
             type="url"
             name="icServerRequestLink"
             value={templateData.icServerRequestLink}
             onChange={handleInputChange}
             className={formFieldClass}
           />
         </div>
        <div>
          <label className={formLabelClass}>Choice of Reviewers</label>
          <select
            name="listChoice"
            value={templateData.listChoice}
            onChange={handleSelectChange}
            className={`${formFieldClass} h-10`}
          >
            <option value="send me a list">Send me a list</option>
            <option value="confirm the list">Confirm the list</option>
          </select>
        </div>
        <div>
          <label className={formLabelClass}>List of Reviewers</label>
          <textarea
            name="listOfReviewers"
            value={templateData.listOfReviewers}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <div>
          <label className={formLabelClass}>Project Overview</label>
          <textarea
            name="projectOverview"
            value={templateData.projectOverview}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <div>
          <label className={formLabelClass}>Project Brief</label>
          <textarea
            name="projectBrief"
            value={templateData.projectBrief}
            onChange={handleInputChange}
            className={formFieldClass}
          />
        </div>
        <NewScopeSectionForm
          scopeSections={templateData.newScopeSections || []}
          formLabelClass={formLabelClass}
          formFieldClass={formFieldClass}
          handleScopeSectionChange={handleNewScopeSectionChange}
          handleUpdateChange={handleNewUpdateChange}
          addScopeSection={addNewScopeSection}
          removeScopeSection={removeNewScopeSection}
          addUpdate={addNewUpdate}
        />
        <UpdateScopeSectionForm
          scopeSections={templateData.updateScopeSections || []}
          formLabelClass={formLabelClass}
          formFieldClass={formFieldClass}
          handleScopeSectionChange={handleUpdateScopeSectionChange}
          handleUpdateChange={handleUpdateUpdateChange}
          addScopeSection={addUpdateScopeSection}
          removeScopeSection={removeUpdateScopeSection}
          addUpdate={addUpdateUpdate}
        />
        <ListOfGeosForm
          formLabelClass={formLabelClass}
          formFieldClass={formFieldClass}
        />
      </form>
    </div>
  );
}
