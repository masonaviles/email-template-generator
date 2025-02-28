import { useTemplateContext } from '../../context/TemplateContext';
import { formatDate } from '../TemplateView/TemplatePreview';

export default function PlanetRequestEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Planet Request Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
      <pre className="whitespace-pre-wrap break-words">
        SUBJECT :<br/>
        {templateData.projectName || '[Project Name]'} : PLANET Request<br/><br/>

        Hello,<br/><br/>

        Requesting a PLANET job for {templateData.projectName || '[Project Name]'}.<br/><br/>

        Project details provided below.<br/><br/>

        Please let me know if you have any questions or need any additional info.<br/><br/>

        Project Name : {templateData.projectName || '[Project Name]'}<br/>
        Kickoff Date : {formatDate(templateData.kickoffDate) || '[Kickoff Date]'}<br/>
        Launch Date : {formatDate(templateData.launchDate) || '[Launch Date]'}<br/>
        Lead Producer : {templateData.producerName || '[Producer Name]'}<br/><br/>

        Project Description : <br/>
        {templateData.projectDescription || '[Project Description]'}<br/><br/>

        Thanks,<br/>
        {templateData.producerName || '[Producer Name]'}
      </pre>
    </div>
    </>
  );
}
