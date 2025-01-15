import { useTemplateContext } from '../../context/TemplateContext';

// const used in regex in app/api/templates/route.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customTemplateName = 'GEO: GEO Handoff Email - CONFIDENTIAL';

export default function GeoHandoffConfidentialEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">GEO Handoff Confidential Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">
      
          **IMPORTANT : If your project is confidential, consult with Marcom Managing Producer on how to handle informing GEOs, before sending any communications. <br/><br/><br/>


          SUBJECT : <br/>
          GEO HANDOFF : {templateData.projectName || '[Project Name]'} <br/><br/>

          GEO HANDOFF<br/><br/>

          CONFIDENTIAL<br/><br/>

          Hi Everyone,<br/><br/>

          Below is the handoff for {templateData.projectName || '[Project Name]'}.<br/><br/>

          HANDOFF RADARS: <br/>
          ALAC-CA — [LINK TO HANDOFF RADAR]<br/>
          ANZ — [LINK TO HANDOFF RADAR]<br/>
          CEE — [LINK TO HANDOFF RADAR]<br/>
          EU — [LINK TO HANDOFF RADAR]<br/>
          GC — [LINK TO HANDOFF RADAR]<br/>
          IN — [LINK TO HANDOFF RADAR]<br/>
          JP — [LINK TO HANDOFF RADAR]<br/>
          KR — [LINK TO HANDOFF RADAR]<br/>
          ME — [LINK TO HANDOFF RADAR]<br/>
          SEA — [LINK TO HANDOFF RADAR]<br/>
          TR — [LINK TO HANDOFF RADAR]<br/><br/>

          Please reach out with any questions. <br/><br/>

          ===============<br/>
          Project Name: {templateData.projectName || '[Project Name]'}<br/><br/>

          GEO Loc Requirements and timing: To go live [WITH US / AFTER US] on [DATE].<br/>
          **IMPORTANT: US MUST merge to Trunk and push live FIRST then GEOs to follow after.<br/>
          A follow up confirmation email will be sent as soon as we are live.<br/><br/>

          Project Scope Preview:<br/>
            • New Page Estimate: [NUMBER]<br/>
            • Updated Page Estimate: [NUMBER]<br/>
            • Words to Translate Estimate: [NUMBER]<br/>
            • DM Estimate (New/Updated): N/A<br/>
            • Content Estimates (Screens, other): [NUMBER]<br/><br/>

          Project Overview / Summary: [PROJECT OVERVIEW]<br/><br/>

          Schedule Details: <br/>
            • Copy Deck: [HANDOFF DATE]<br/>
            • PDF: [HANDOFF DATE]<br/>
            • GEOs localize copy: [DATE RANGE] <br/>
            • Go-Live: [DATE]<br/><br/>

          Applicable GEOs:<br/>
          [LIST OF APPLICABLE GEOs]<br/><br/>

          GEO Alts: <br/>
          [LIST OF APPLICABLE GEOs]<br/><br/>

          Link to Preview Files: <br/>
            • Link to Briefing Deck: [APPLE BOX LINK]<br/>
            • Link to Copy Deck: [APPLE BOX LINK]<br/>
            • Link to PSDs: [APPLE BOX LINK]<br/>
            • Link to Brief Tool (w/ annotations): [APPLE BOX LINK]<br/><br/>

          Radar Component: Interactive XX | [COMPONENT NAME]<br/><br/>

          ic Server: ic##<br/><br/>

          Project inventory: <br/>
          Planet Workshop Link: [PLANET SUSTAIN LINK] <br/>
          Planet Project Name: [PLANET SUSTAIN PROJECT NAME]<br/><br/>


          Thanks,<br/>
          {templateData.producerName || '[Producer Name]'}

        </pre>
    </div>
    </>
  );
}