import { useTemplateContext } from '../../context/TemplateContext';

export default function StakeholderCreativeApprovalEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Stakeholder Creative Approval Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">

            SUBJECT : <br/>
            {templateData.projectName || '[Project Name]'} : Creative Approval : Approval due [DATE]<br/><br/>

            Hello,<br/><br/>

            Attached, please find Final Creative ready for approval. Please review and provide approval by [TIME AND DATE].<br/><br/>

            Final Creative : <br/>
            [PDF or APPLE BOX LINK TO CREATIVE]<br/><br/>

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