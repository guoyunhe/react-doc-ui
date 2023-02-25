import { ReactNode, useState } from 'react';
import { Highlighter, Language } from './Highlighter';

export interface CodeFile {
  filename?: string;
  language: Language;
  code: string;
}

export interface CodeBlockProps {
  demo?: ReactNode;
  files: CodeFile[];
}

export function CodeBlock({ demo, files }: CodeBlockProps) {
  const [activeFile, setActiveFile] = useState(0);
  return (
    <div style={{}}>
      <div style={{}}>{demo}</div>

      {files.map((file, index) => (
        <div
          key={file.filename || index}
          onClick={() => {
            setActiveFile(index);
          }}
          style={{
            background: activeFile === index ? '#fff' : '#000',
          }}
        >
          {file.filename || file.language.toUpperCase()}
        </div>
      ))}
      {files.map((file, index) => (
        <Highlighter key={file.filename || index} {...file} />
      ))}
    </div>
  );
}
