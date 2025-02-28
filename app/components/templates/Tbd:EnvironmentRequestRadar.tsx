import { useTemplateContext } from '../../context/TemplateContext';

// const used in regex in app/api/templates/route.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const customTemplateName = 'TBD: Environment Request Radar';

export default function GeoHandoffEmailTemplate() {
  const { templateData } = useTemplateContext(); // Access context data

  return (
    <>
    <h2 className="text-xl font-bold mb-4">Environment Request and Satellite Project ic request</h2>
    <div className="text-sm bg-gray-50 p-4 rounded-md shadow-inner whitespace-pre-wrap break-words">
        <pre className="whitespace-pre-wrap break-words">
      
            <strong>TITLE: </strong> 
            ENVIRONMENT REQUEST : {templateData.projectName || '[Project Name]'}<br/><br/>

            Project [Code] Name: <br/>
            {templateData.projectName || '[Project Name]'}<br/><br/>
            
            Planet Project Link (required):<br/>
            {templateData.planetLink || '[Planet Link]'} <br/><br/>

            ic server request:<br/>
            {templateData.icServerRequestLink || '[ic Server Request Link]'} 

        </pre>
    </div>
    <div>
      <br/><a href="rdar://new" type="button" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">New Radar</a><br/><br/>
        Copy the values in. After creating, route the radar to Interactive Release (no need to email).
    </div>
    </>
  );
}