import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Server-side function to fetch template names from the /components/templates folder
export async function GET() {
  const templatesDirectory = path.join(process.cwd(), 'app/components/templates');
  const templateFiles = fs.readdirSync(templatesDirectory).filter(file => 
    file.endsWith('.tsx') || file.endsWith('.jsx'));
  const templateNameData: { filename: string, customName: string | null }[] = [];

  templateFiles.forEach((file: string) => {
    const fullPath = path.join(templatesDirectory, file)
    const filename = path.basename(fullPath, path.extname(fullPath));
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    const customName = fileContent.match(/customTemplateName\s*=\s*['"`](.*?)['"`]/);

    templateNameData.push({
      filename: filename,
      customName: customName ? customName[1] : null,
    });
  });

  return NextResponse.json(templateNameData);
}
