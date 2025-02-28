import { useTemplateContext } from '../../context/TemplateContext';

// const used in regex in app/api/templates/route.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customTemplateName = 'GP: GP & Copy GEO Prep Email';

export default function GpCopyGeoPrepEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">GP & Copy GEO Prep Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">
      
            SUBJECT : <br/>
            {templateData.projectName || '[Project Name]'} : GP & Copy GEO Prep<br/><br/>

            Hello,<br/><br/>

            Below, please find the project details for {templateData.projectName || '[Project Name]'}. <br/><br/>

            Please prep PSDs and Copy Decks for GEO Handoff. Targeting to have all ready for GEOs by [DATE]. <br/><br/>

            Please let me know if you have any questions or need any additional info.<br/><br/>

            Thanks,<br/>
            {templateData.producerName || '[Producer Name]'}<br/><br/>

            ====================<br/>
            Project Overview: <br/>
            {templateData.projectOverview || '[Project Overview]'}<br/><br/>

            Final Production Files:<br/>
            [LINK TO LATEST PRODUCTION FILES / WHERE YOU WANT THEM SAVED]<br/><br/>

            Copy Deck(s):<br/>
            [LINK TO LATEST COPY DECKS / WHERE YOU WANT THEM SAVED]<br/><br/>

            Project Folders : <br/>
            QUIP : [LINK]<br/>
            AppleBox : [LINK]<br/><br/>

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