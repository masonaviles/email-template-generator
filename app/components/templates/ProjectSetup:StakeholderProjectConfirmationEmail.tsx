import { useTemplateContext } from '../../context/TemplateContext';
import { formatDate } from '../TemplateView/TemplatePreview';

export default function StakeholderProjectConfirmationEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Project Confirmation Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
      <pre className="whitespace-pre-wrap break-words">
        SUBJECT : <br/>
        {templateData.projectName || '[Project Name]'} : Project Confirmation<br/><br/>

        Hello,<br/><br/>

        Confirming {templateData.projectName || '[Project Name]'} has been scheduled and the launch date {formatDate(templateData.launchDate) || '[Launch Date]'} is secured. Below, please find the project details and the review schedule.<br/><br/>

        Please let me know if you have any questions or changes. Please note the review dates, feedback deadlines, and please also {templateData.listChoice || '[Choice of Reviewers]'} of reviewers that will require access.<br/><br/>

        Thanks,<br/>
        {templateData.producerName || '[Producer Name]'}<br/><br/>

        ====================<br/>
        Project Name: <br/>
        {templateData.projectName || '[Project Name]'}<br/><br/>

        List of Reviewers:<br/>
        {templateData.listOfReviewers || '[List of Reviewers]'}<br/><br/>

        Project Overview: <br/>
        {templateData.projectOverview || '[Project Overview]'}<br/><br/>

        Project Brief:<br/>
        {templateData.projectBrief || '[Project Brief]'}<br/><br/>

        Scope: <br/>
        New<br/>
        {templateData.newScopeSections?.length > 0 ? (
          templateData.newScopeSections.map((section, index) => (
            <><div key={index}>
              https://www.apple.com/{section.url}<br/>
              <ul>
                <li>1. Fluid</li>
                <li>2. Accessibility</li>
                <li>3. Analytics</li>
                <li>4. Screens/HW : {section.numScreens || '[Number of Screens/HW]'}</li>
                <li>5. Videos/Animations : {section.numVideos || '[Number of Videos/Animations]'}</li>
                <li>6. Updates :</li>
                <ul>
                  {section.updates?.map((update, i) => (
                    <li key={i}>{update || '[Update]'}</li>
                  ))}
                </ul>
              </ul>
            </div><br/></>
          ))
        ) : (
          <><p>[New Scope Sections]</p><br/><br/></>
        )}

        <br/>Update<br/>
        {templateData.updateScopeSections?.length > 0 ? (
          templateData.updateScopeSections.map((section, index) => (
            <><div key={index}>
              https://www.apple.com/{section.url}<br/>
              <ul>
                <li>1. Fluid</li>
                <li>2. Accessibility</li>
                <li>3. Analytics</li>
                <li>4. Screens/HW : {section.numScreens || '[Number of Screens/HW Updates]'}</li>
                <li>5. Videos/Animations : {section.numVideos || '[Number of Videos/Animations Updates]'}</li>
                <li>6. Updates :</li>
                <ul>
                  {section.updates?.map((update, i) => (
                    <li key={i}>{update || '[Update]'}</li>
                  ))}
                </ul>
              </ul>
              </div><br/></>
          ))
        ) : (
          <><p>[Update Scope Sections]</p><br/><br/></>
        )}

        <br/>GEOs:<br/>
        {templateData.listOfGeos || '[List of GEOs]'}<br/><br/>

        Schedule : <br/>
        {templateData.milestonesSchedule || '[Milestones Schedule]'}
      </pre>
    </div>
    </>
  );
}