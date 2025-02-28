import { useTemplateContext } from '../../context/TemplateContext';

export default function DevKickoffEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Dev Kick-off Email Template</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">
      
        SUBJECT : <br/>
        {templateData.projectName || '[Project Name]'} : Dev Kick-off<br/><br/>

        Hello,<br/><br/>

        Below, please find the project details for {templateData.projectName || '[Project Name]'}.  <br/><br/>

        Build radar(s) have been assigned to [LEVEL DEV LEAD]. Targeting to have R1 HTML ready for review by [DATE]. <br/><br/>

        Please let me know if you have any questions or need any additional info.  <br/><br/>

        Thanks,<br/>
        {templateData.producerName || '[Producer Name]'}<br/><br/>

        ====================<br/>
        Project Overview: <br/>
        {templateData.projectOverview || '[Project Overview]'}<br/><br/>

        Approval: <br/>
        [APPROVAL RADAR LINK]<br/><br/>

        Build Radar(s):<br/>
        [BUILD RADAR LINK]<br/><br/>

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

        Branch:<br/>
        ic [IC NUMBER]<br/><br/>

        Component: <br/>
        [RADAR COMPONENT]<br/><br/>

        GEOs:<br/>
        {templateData.listOfGeos || '[List of GEOs]'}<br/>
        [revving /v/ or additive changes]<br/><br/>

        Project Folders:<br/>
        Quip: [QUIP LINK]<br/>
        AppleBox: [APPLEBOX LINK]<br/>
        Server: [SERVER LINK]<br/><br/>

        COMPs:<br/>
        [LINK TO COMPs]<br/><br/>

        COPY DECK(s):<br/>
        [LINK TO COPY DECK(s)]<br/><br/>

        PLANET : <br/>
        {templateData.planetLink || '[Planet Link]'}<br/><br/>

        JOB CODE : <br/>
        [JOB CODE]<br/><br/>

        Schedule : <br/>
        {templateData.milestonesSchedule || '[Milestones Schedule]'}

        </pre>
    </div>
    </>
  );
}