import TemplateForm from './components/TemplateView/TemplateForm';
import TemplateManager from './components/TemplateView/TemplateManager';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Template Engine',
  description: 'Apple Level Project Template Engine: The best way to start a project!'
}

export default function Home() {

  return (
    <div className="main-content min-h-screen bg-gray-100 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left: Template Manager (Template List and Preview) */}
      <div className="sticky top-4 self-start">
        <TemplateManager />
      </div>

      {/* Right: Template Form */}
      <div className="sticky top-4 self-start">
        <TemplateForm />
      </div>
    </div>
  );
}
