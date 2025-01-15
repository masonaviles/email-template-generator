import { useTemplateContext } from '../../context/TemplateContext';

// const used in regex in app/api/templates/route.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customTemplateName = 'Dev: Stakeholder HTML Approval Email';

export default function StakeholderHtmlApprovalEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Stakeholder Html Approval Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">

            SUBJECT : <br/>
            {templateData.projectName || '[Project Name]'} : HTML Approval : Approval due [DATE]<br/><br/>

            Hello,<br/><br/>

            Below, please find Final HTML ready for approval. Please review and provide approval by [TIME AND DATE].<br/><br/>

            Preview Link(s) : <br/>
            [ic PREVIEW LINKS]<br/><br/>

            Callout(s) : <br/>
            [LIST ANY CALLOUTS]<br/>
            **NOTE : Any feedback/changes received after QA Kick-off will be deferred to Post-Launch (PL) or Web Edit, unless deemed P1.<br/><br/>

            Schedule : <br/>
            {templateData.milestonesSchedule || '[Milestones Schedule]'}<br/><br/>

            Thanks,<br/>
            {templateData.producerName || '[Producer Name]'}

        </pre>
    </div>
    </>
  );
}