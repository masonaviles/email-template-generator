"use client";

import { FaPlus, FaTrash } from 'react-icons/fa';
import { UpdateScopeSectionFormProps } from '../../types/template';

export default function UpdateScopeSectionForm({
  scopeSections = [],
  formLabelClass,
  formFieldClass,
  handleScopeSectionChange,
  handleUpdateChange,
  addScopeSection,
  removeScopeSection,
  addUpdate
}: UpdateScopeSectionFormProps) {
  return (
    <div>
      <h4 className="text-l font-bold mb-4">Update Scope Sections</h4>
      {scopeSections.map((section, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-md shadow-inner mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Scope Section {index + 1}</h3>
            <button
              type="button"
              onClick={() => removeScopeSection(index)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>

          <div className="mt-2">
            <label className={formLabelClass}>URL: https://www.apple.com/</label>
            <input
              type="url"
              value={section.url}
              onChange={(e) => handleScopeSectionChange(index, 'url', e.target.value)}
              className={formFieldClass}
            />
          </div>

          <div className="mt-2">
            <label className={formLabelClass}>Number of Screens</label>
            <input
              type="number"
              value={section.numScreens}
              onChange={(e) => handleScopeSectionChange(index, 'numScreens', parseInt(e.target.value))}
              className={formFieldClass}
            />
          </div>

          <div className="mt-2">
            <label className={formLabelClass}>Number of Videos/Animations</label>
            <input
              type="number"
              value={section.numVideos}
              onChange={(e) => handleScopeSectionChange(index, 'numVideos', parseInt(e.target.value))}
              className={formFieldClass}
            />
          </div>

          <div className="mt-2">
            <label className={formLabelClass}>Updates</label>
            {section.updates.map((update, updateIndex) => (
              <input
                key={updateIndex}
                type="text"
                value={update}
                onChange={(e) => handleUpdateChange(index, updateIndex, e.target.value)}
                className={`${formFieldClass} mt-1`}
              />
            ))}
            <button
              type="button"
              onClick={() => addUpdate(index)}
              className="text-indigo-600 hover:text-indigo-800 mt-2 inline-flex items-center"
            >
              <FaPlus className="mr-1" /> Add Update
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addScopeSection}
        className="text-indigo-600 hover:text-indigo-800 mt-4 inline-flex items-center"
      >
        <FaPlus className="mr-1" /> Add Scope Section
      </button>
    </div>
  );
}
