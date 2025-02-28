"use client";

import React, { useState } from "react";
import { useTemplateContext } from '../../context/TemplateContext';
import { FaChevronDown, FaChevronUp, FaDownload } from 'react-icons/fa';
import { Project } from '../../types/project';

export default function ExportImport() {
    const { templateData } = useTemplateContext();
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const getCurrentDateTime = () => {
        const now = new Date();
        return now.toLocaleString().replace(/[\/,:\s]/g, "-");
    };

    const exportAllProjects = () => {
        const savedProjects = localStorage.getItem("projectList");
        if (!savedProjects) {
            alert("No projects available to export!");
            return;
        }

        const projectName = "AllProjects";
        const currentDateTime = getCurrentDateTime();
        const filename = `${projectName}-${currentDateTime}.json`;

        const blob = new Blob([savedProjects], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
    };

    const exportCurrentProject = () => {
        const projectName = templateData.projectName || "Untitled";
        const currentDateTime = getCurrentDateTime();
        const filename = `${projectName}-${currentDateTime}.json`;

        const currentProjectArray = [
            {
                name: `${projectName} - ${currentDateTime}`,
                data: templateData
            }
        ];

        const blob = new Blob([JSON.stringify(currentProjectArray, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
    };

    const importFromFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const importedProjects = JSON.parse(e.target?.result as string);
            const existingProjects = JSON.parse(localStorage.getItem("projectList") || "[]");

            const updatedProjects = [...existingProjects];
            let duplicateFound = false;

            importedProjects.forEach((importedProject: Project) => {
                const isDuplicate = existingProjects.some((existingProject: Project) =>
                    existingProject.name === importedProject.name &&
                    JSON.stringify(existingProject.data) === JSON.stringify(importedProject.data)
                );

                if (isDuplicate) {
                    duplicateFound = true;
                } else {
                    updatedProjects.push(importedProject);
                }
            });

            if (duplicateFound) {
                alert("Project already exists.");
            } else {
                localStorage.setItem("projectList", JSON.stringify(updatedProjects));
                alert("Projects imported successfully!");
            }

            window.location.reload();
        };

        reader.readAsText(file);
    };

    return (
        <div className="bg-gray-100 p-4 rounded shadow-md">
            <div className="flex flex-nowrap flex-row gap-4 items-center justify-between cursor-pointer" onClick={toggleAccordion}>
                <h3 className="text-lg font-bold">Export/Import Projects</h3>
                {isOpen ? (
                    <FaChevronUp className="text-gray-500" />
                ) : (
                    <FaChevronDown className="text-gray-500" />
                )}
            </div>
            {isOpen && (
                <div className="mt-4">
                    <div className="flex gap-4">
                        <div className="mt-1p-2 rounded">
                            <button
                                onClick={exportAllProjects}
                                className="bg-blue-500 text-white p-2 rounded mb-4 px-6 flex flex-row items-center"
                            >
                                <FaDownload className="mr-2" /> Export All Projects
                            </button>
                        </div>

                        <div className="mt-1p-2 rounded">
                            <button
                                onClick={exportCurrentProject}
                                className="bg-green-500 text-white p-2 rounded mb-4 px-6 flex flex-row items-center"
                            >
                                <FaDownload className="mr-2" /> Export Current Project
                            </button>
                        </div>
                    </div>

                    <div className="mt-1 bg-white p-2 rounded p-4">
                        <label className="block mb-2 import-label">Import from JSON</label>
                        <input
                            type="file"
                            accept=".json"
                            onChange={importFromFile}
                            className="mb-4 p-4 border rounded w-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
