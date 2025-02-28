"use client";

import React from 'react';
import { Project } from '../../types/project';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

interface ProjectControlsProps {
    projectList: Project[];
    currentProject: string | null;
    loadProject: (projectName: string) => void;
    saveProject: () => void;
    deleteProject: (projectName: string) => void;
    clearForm: () => void;
}

export default function ProjectControls({
  projectList,
  currentProject,
  loadProject,
  saveProject,
  deleteProject,
  clearForm,
}: ProjectControlsProps) {

  const DeleteConfirmation = () => (
    <ModalContent>
      <ModalHeader>Delete saved Project?</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <p>This is irreversible.</p>
      </ModalBody>
      <ModalFooter className='gap-4'>
        <button
        type="button"
        onClick={onClose}
        className="bg-gray-100 hover:bg-gray-300 py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
            type="button"
            onClick={() => {
              {currentProject && (deleteProject(currentProject))}
              onClose()
            }}
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Delete
          </button>
      </ModalFooter>
    </ModalContent>
  )

  const ClearConfirmation = () => (
    <ModalContent>
      <ModalHeader>Clear all Project Constants?</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <p>All unsaved changes will be lost.</p>
      </ModalBody>

      <ModalFooter className='gap-4'>
        <button
        type="button"
        onClick={onClose}
        className="bg-gray-100 hover:bg-gray-300 py-2 px-4 rounded"
        >
          Cancel
        </button>
        <button
            type="button"
            onClick={() => {
              clearForm()
              onClose()
            }}
            className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
          >
            Clear
          </button>
      </ModalFooter>
    </ModalContent>
  )

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ modalContent, setModalContent] = React.useState<React.JSX.Element | undefined>(undefined);

  return (
    <div className="flex items-center justify-between space-x-4">
      {/* Dropdown to select from saved projects */}
      <div>
        <label className="block text-sm font-bold">Saved Projects</label>
        <select
          className="w-full p-2 border border-gray-300 h-10 mb-1 rounded cursor-pointer"
          onChange={(e) => loadProject(e.target.value)}
        >
          <option value="">-- New Project --</option>
          {projectList.map((project) => (
            <option key={project.name} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
      </div>
      {/* Save, Delete, and Clear Buttons */}
      <div className="flex space-x-4 mt-4">
        {/* Modal for confirming destructive actions */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          {modalContent}
        </Modal>
        <button
          type="button"
          onClick={saveProject}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          {currentProject ? 'Update' : 'Save'}
        </button>
        {currentProject && (
          <button
            type="button"
            onClick={() => {
              setModalContent(DeleteConfirmation)
              onOpen()
            }}
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Delete
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            setModalContent(ClearConfirmation)
            onOpen()
          }}
          className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
