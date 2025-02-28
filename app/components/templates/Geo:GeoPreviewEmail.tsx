import { useTemplateContext } from '../../context/TemplateContext';

// const used in regex in app/api/templates/route.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customTemplateName = 'GEO: GEO Preview Email';

export default function GeoPreviewConfidentialEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">GEO Preview Confidential Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">
      
            **IMPORTANT : If your project is confidential, consult with Marcom Managing Producer on how to handle informing GEOs, before sending any communications. <br/><br/><br/>

            SUBJECT : <br/>
            GEO PREVIEW : {templateData.projectName || '[Project Name]'} [CONFIDENTIAL]<br/><br/>

            GEO PREVIEW<br/><br/>

            CONFIDENTIAL<br/><br/>

            Hi Everyone,<br/><br/>

            This is a GEO Preview for {templateData.projectName || '[Project Name]'}.<br/><br/>

            Please see project preview details, below. <br/><br/>

            Project Name: {templateData.projectName || '[Project Name]'}<br/><br/>

            GEO Loc Requirements and timing: To go live [WITH US / AFTER US] on [DATE].<br/>
            **IMPORTANT: US MUST merge to Trunk and push live FIRST then GEOs to follow after.<br/><br/>

            Project Scope Preview:<br/>
                • New Page Estimate: [NUMBER]<br/>
                • Updated Page Estimate: [NUMBER]<br/>
                • Words to Translate Estimate: [NUMBER]<br/>
                • DM Estimate (New/Updated): N/A<br/>
                • Content Estimates (Screens, other): [NUMBER]<br/><br/>

            Thanks,<br/>
            {templateData.producerName || '[Producer Name]'}

        </pre>
    </div>
    </>
  );
}