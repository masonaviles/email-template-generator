import { useTemplateContext } from '../../context/TemplateContext';

export default function StakeholderLiveNotificationEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Stakeholder Live Notification Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">

            SUBJECT : <br/>
            {templateData.projectName || '[Project Name]'} : LIVE<br/><br/>

            Hello,<br/><br/>

            {templateData.projectName || '[Project Name]'} is live — congrats!<br/><br/>

            Please let me know if you have any questions or any additional PL needs.<br/><br/>

            URL(s) : <br/>
            [LIST OF PROJECT URL(S)]<br/><br/>

            GEO Handoff : <br/>
            [DATE]<br/><br/>

            PL Updates : <br/>
            [LIST ANY PL UPDATES]<br/><br/>

            PL Schedule : <br/>
            {templateData.milestonesSchedule || '[Milestones Schedule]'}<br/><br/>

            Thanks,<br/>
            {templateData.producerName || '[Producer Name]'}

        </pre>
    </div>
    </>
  );
}