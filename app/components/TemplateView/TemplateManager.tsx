import TemplateList from './TemplateList';
import TemplatePreview from './TemplatePreview';

export default function TemplateManager() {
  return (
    <div className="select-template-container container mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col gap-4">
      <TemplateList />
      <TemplatePreview />
    </div>
  );
}
