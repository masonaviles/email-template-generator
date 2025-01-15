import { useTemplateContext } from '../../context/TemplateContext';

// const used in regex in app/api/templates/route.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customTemplateName = 'GEO: GEO Preview Email - NON CONFIDENTIAL';

export default function GeoPreviewNonConfidentialEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">GEO Preview Non-Confidential Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">
      
        SUBJECT : <br/>
        GEO PREVIEW : {templateData.projectName || '[Project Name]'} [NON-CONFIDENTIAL]<br/><br/>

        GEO PREVIEW<br/><br/>

        NON-CONFIDENTIAL <br/><br/>

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

        Project Overview / Summary: [PROJECT OVERVIEW]<br/><br/>

        Schedule Details: <br/>
          • Copy Deck: [HANDOFF DATE OR BOX LINK]<br/>
          • PDF: [HANDOFF DATE OR BOX LINK]<br/>
          • GEOs localize copy: [DATE RANGE] <br/>
          • Go-Live: [DATE]<br/><br/>

        Applicable GEOs:<br/>
        [LIST OF APPLICABLE GEOs]<br/><br/>

        Link to Preview Files: <br/>
          • Briefing Deck: [APPLE BOX LINK]<br/><br/>

        Radar Component: Interactive XX | [COMPONENT NAME]<br/><br/>

        ic Server: ic##<br/><br/>

        Project inventory: <br/>
        Planet Sustain Link: [PLANET SUSTAIN LINK] <br/>
        Planet Sustain Project Name: [PLANET SUSTAIN PROJECT NAME]<br/><br/>


        Thanks,<br/>
        {templateData.producerName || '[Producer Name]'}

        </pre>
    </div>
    </>
  );
}