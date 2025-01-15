"use client";

import { useTemplateContext } from '../../context/TemplateContext';
import { Tooltip } from '@chakra-ui/react'
import { FaInfoCircle } from 'react-icons/fa';
import { ListOfGeosFormProps } from '../../types/template';

export default function ListOfGeosForm({ formLabelClass, formFieldClass }: ListOfGeosFormProps) {
  const { templateData, updateTemplateData } = useTemplateContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateTemplateData(name as keyof typeof templateData, value.split('\n'));
  };

  return (
    <div>
      <div className="flex items-center space-x-2">
        <label className={formLabelClass}>List of Geos</label>
        <Tooltip label='LIST GEOs GOING LIVE WITH US or US ONLY; GEO HANDOFF PL' placement='right'>
          <span><FaInfoCircle className="text-gray-400" /></span>
        </Tooltip>
      </div>
      <textarea
        name="listOfGeos"
        value={Array.isArray(templateData.listOfGeos) ? templateData.listOfGeos.join('\n') : ''}
        onChange={handleInputChange}
        className={formFieldClass}
        placeholder="[LIST GEOs GOING LIVE WITH US or US ONLY; GEO HANDOFF PL]"
      />
    </div>
  );
}
