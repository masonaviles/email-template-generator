import { useTemplateContext } from '../../context/TemplateContext';
import { formatDate } from '../TemplateView/TemplatePreview';

export default function CreativeKickoffEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Creative Kick-off Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">

            SUBJECT : <br/>
            {templateData.projectName || '[Project Name]'} : Creative Kick-off<br/><br/>

            Hello,<br/><br/>

            Below, please find the project details for {templateData.projectName || '[Project Name]'}. <br/><br/>

            Targeting to have R1 Creative ready for client work share on {formatDate(templateData.dueDate) || '[Due Date]'}.<br/><br/>

            Please let me know if you have any questions or need any additional info.  <br/><br/>

            Thanks,<br/>
            {templateData.producerName || '[Producer Name]'}<br/><br/>

            ====================<br/>
            Project Overview: <br/>
            {templateData.projectOverview || '[Project Overview]'}<br/><br/>

            Creative Brief / Mark up: <br/>
            {templateData.projectBrief || '[Project Brief]'}<br/><br/>

            PSDs:<br/>
            [LINK TO LATEST PSDs on iclive]<br/><br/>

            Copy Deck(s):<br/>
            [LINK TO LATEST COPY DECKS OR TEMPLATE TO FOLLOW; IDEALLY LINK TO ARCHIVED BOX FOLDER]<br/><br/>

            Project Folders : <br/>
            QUIP : [LINK]<br/>
            AppleBox : [LINK]<br/>
            Server : [LINK]<br/><br/>

            GEOs:<br/>
            {templateData.listOfGeos || '[List of GEOs]'}<br/><br/>

            Job Code:<br/>
            [JOB CODE]<br/><br/>

            Schedule : <br/>
            {templateData.milestonesSchedule || '[Milestones Schedule]'}

        </pre>
    </div>
    </>
  );
}
