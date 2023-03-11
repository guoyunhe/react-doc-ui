import { useState } from 'react';
import { DocCodeBlock, Language } from './DocCodeBlock';
import { useDoc } from './DocContext';

export interface CodeFile {
  filename?: string;
  language: Language;
  code: string;
}

export interface DocTabCodeBlockProps {
  files: CodeFile[];
}

export function DocTabCodeBlock({ files }: DocTabCodeBlockProps) {
  const { actualTheme } = useDoc();
  const [activeFile, setActiveFile] = useState(0);

  const activeTabBg = actualTheme === 'dark' ? '#161b22' : '#f6f8fa';
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ paddingLeft: 16, paddingRight: 16, display: 'flex' }}>
        {files.map((file, index) => (
          <div
            key={file.filename || index}
            onClick={() => {
              setActiveFile(index);
            }}
            style={{
              background: activeFile === index ? activeTabBg : 'transparent',
              cursor: 'pointer',
              padding: '4px 12px',
              borderRadius: '6px 6px 0 0',
            }}
          >
            {file.filename || file.language.toUpperCase()}
          </div>
        ))}
      </div>
      {files.map((file, index) => (
        <DocCodeBlock
          key={file.filename || index}
          {...file}
          style={{ marginTop: 0, display: activeFile === index ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
}
