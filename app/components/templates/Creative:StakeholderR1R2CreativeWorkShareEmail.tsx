import { useTemplateContext } from '../../context/TemplateContext';

// const used in regex in app/api/templates/route.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customTemplateName = 'Creative: Stakeholder R1/R2 Creative Work Share Email';

export default function StakeholderR1R2CreativeWorkShareEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Stakeholder R1/R2 Creative Work Share Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">

            SUBJECT : <br/>
            {templateData.projectName || '[Project Name]'} : R1 Creative Work Share: Feedback due [DATE]<br/>
            {templateData.projectName || '[Project Name]'} : R2 Creative Work Share : Feedback due [DATE]<br/><br/>

            Meeting R1/R2 Creative Work Share<br/>
            ==========<br/>
            Hello,<br/><br/>

            In advance of our R1 [OR R2] Creative Work Share meeting, attached, please find R1 Creative ready for review. Please review and provide consolidated feedback by [TIME AND DATE].<br/><br/>

            R1 [OR R2] Creative : <br/>
            [APPLE BOX LINK TO CREATIVE]<br/><br/>

            Callout(s) : <br/>
            [LIST ANY CALLOUTS / CREATIVE NOTES]<br/><br/>

            Schedule : <br/>
            {templateData.milestonesSchedule || '[Milestones Schedule]'}<br/><br/>

            Thanks,<br/>
            {templateData.producerName || '[Producer Name]'}<br/><br/>

            SUBJECT : <br/>
            {templateData.projectName || '[Project Name]'} : R1 Creative Work Share : Feedback due [DATE]<br/>
            {templateData.projectName || '[Project Name]'} : R2 Creative Work Share : Feedback due [DATE]<br/><br/>

            Email R1/R2 Creative Work Share<br/>
            ==========<br/>
            Hello,<br/><br/>

            Attached, please find R1 [OR R2] Creative ready for review. Please review and provide consolidated feedback by [TIME AND DATE].<br/><br/>

            R1 [OR R2] Creative : <br/>
            [APPLE BOX LINK TO CREATIVE]<br/><br/>

            Callout(s) : <br/>
            [LIST ANY CALLOUTS / CREATIVE NOTES]<br/><br/>

            Schedule : <br/>
            {templateData.milestonesSchedule || '[Milestones Schedule]'}<br/><br/>

            Thanks,<br/>
            {templateData.producerName || '[Producer Name]'}

        </pre>
    </div>
    </>
  );
}