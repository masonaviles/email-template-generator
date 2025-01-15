import { useTemplateContext } from '../../context/TemplateContext';

export default function StagePushEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Stage Push Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">

            SUBJECT : <br/>
            {templateData.projectName || '[Project Name]'} : Stage/Push<br/><br/>

            Hello,<br/><br/>

            {templateData.projectName || '[Project Name]'} is ready to stage/push. Approval Radar is now with you : <br/>
            [APPROVAL RADAR LINK]<br/><br/>

            Our merge window is today, [TIME WINDOW]. <br/><br/>

            {templateData.projectName || '[Project Name]'}<br/>
            Producer(s): [NAME(S)]<br/>
            Dev: [NAME(S)]<br/>
            QA: [NAME(S)]<br/>
            RM: [NAME(S)]<br/>
            ic##<br/>
            Scheduled: [DATE] at [TIME WINDOW]<br/>
            Approval: [APPROVAL RADAR LINK] <br/>
            VAT: [MASTER VAT RADAR LINK]<br/><br/>

            Thanks,<br/>
            {templateData.producerName || '[Producer Name]'}

        </pre>
    </div>
    </>
  );
}