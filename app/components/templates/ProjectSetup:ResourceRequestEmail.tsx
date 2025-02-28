import { useTemplateContext } from '../../context/TemplateContext';
import { formatDate } from '../TemplateView/TemplatePreview';

export default function ResourceRequestEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Resource Request Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">
        SUBJECT : <br/>
        {templateData.projectName || '[Project Name]'} : Resource Request<br/><br/>

        Hello,<br/><br/>

        Requesting resources for {templateData.projectName || '[Project Name]'}.<br/><br/>

        Resource allocations have been updated in PLANET, and project details are provided below.<br/><br/>

        Please let me know if you have any questions or need any additional info.<br/><br/>

        PLANET : {templateData.planetLink || '[Planet Link]'}<br/>
        Project Name : {templateData.projectName || '[Project Name]'}<br/>
        Kickoff Date : {formatDate(templateData.kickoffDate) || '[Kickoff Date]'}<br/>
        Launch Date : {formatDate(templateData.launchDate) || '[Launch Date]'}<br/>
        Lead Producer : {templateData.producerName || '[Producer Name]'}<br/><br/>

        Project Description : <br/>
        {templateData.projectDescription || '[Project Description]'}<br/><br/>

        Schedule: <br/>
        {templateData.milestonesSchedule || '[Milestones Schedule]'}<br/><br/>

        Thanks,<br/>
        {templateData.producerName || '[Producer Name]'}
      </pre>
    </div>
    </>
  );
}
