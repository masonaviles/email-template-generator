import { useTemplateContext } from '../../context/TemplateContext';

// const used in regex in app/api/templates/route.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customTemplateName = 'GP: GP Kick-off Email';

export default function GpKickoffEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">GP Kick-off Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">
      
            SUBJECT : <br/>
            {templateData.projectName || '[Project Name]'} : GP Kick-off<br/><br/>

            Hello,<br/><br/>

            Below, please find the project details for {templateData.projectName || '[Project Name]'}. <br/><br/>

            Radars have been assigned to [LEVEL GP LEAD]. Targeting to have creative production ready for dev by [DATE]. <br/><br/>

            Please let me know if you have any questions or need any additional info.<br/><br/>

            Thanks,<br/>
            {templateData.producerName || '[Producer Name]'}<br/><br/>

            ====================<br/>
            Project Overview: <br/>
            {templateData.projectOverview || '[Project Overview]'}<br/><br/>

            GP Dev Prep Radar(s):<br/>
            [LINK TO GP DEV PREP RADAR(S)]<br/><br/>

            OG Image Radar(s):<br/>
            [LINK TO OG IMAGE RADAR(S)]<br/><br/>

            Content Asset Handoff Radar(s):<br/>
            [LINK TO CONTENT ASSET HANDOFF RADAR(S)]<br/><br/>

            Mark up: <br/>
            [INSERT MARK UP]<br/><br/>

            PSDs:<br/>
            [LINK TO LATEST PSDs]<br/><br/>

            Project Folders : <br/>
            QUIP : [LINK]<br/>
            AppleBox : [LINK]<br/>
            Server : [LINK]<br/><br/>

            GEOs:<br/>
            {templateData.listOfGeos || '[List of GEOs]'}<br/><br/>

            JOB CODE:<br/>
            [JOB CODE]<br/><br/>

            Schedule : <br/>
            {templateData.milestonesSchedule || '[Milestones Schedule]'}

        </pre>
    </div>
    </>
  );
}