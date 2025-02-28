import { useTemplateContext } from '../../context/TemplateContext';

// const used in regex in app/api/templates/route.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customTemplateName = 'Dev: Stakeholder R1/R2 HTML Review Email';

export default function StakeholderR1R2HtmlReviewEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Stakeholder R1/R2 Html Review Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">

            SUBJECT : <br/>
            {templateData.projectName || '[Project Name]'} : R1 HTML Share : Feedback due [DATE]<br/>
            {templateData.projectName || '[Project Name]'} : R2 HTML Share : Feedback due [DATE]<br/><br/>

            Hello,<br/><br/>

            Attached, please find R1 [OR R2] HTML ready for review. Please review and provide consolidated feedback by [TIME AND DATE].<br/><br/>

            Preview Link(s) : <br/>
            [ic PREVIEW LINKS]<br/><br/>

            Callout(s) : <br/>
            [LIST ANY CALLOUTS]<br/><br/>

            Schedule : <br/>
            {templateData.milestonesSchedule || '[Milestones Schedule]'}<br/><br/>

            Thanks,<br/>
            {templateData.producerName || '[Producer Name]'}

        </pre>
    </div>
    </>
  );
}