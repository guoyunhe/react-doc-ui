import { CodeBlock } from '../src/CodeBlock';
import { SPDPage } from '../src/SPDPage';

export default function App() {
  return (
    <SPDPage>
      <div style={{ fontSize: 14 }}>
        Please edit <code style={{ color: '#ff8800', fontSize: 14 }}>docs/App.tsx</code> file
      </div>

      <CodeBlock
        files={[
          {
            filename: 'index.tsx',
            language: 'tsx',
            code: 'yoo',
          },
        ]}
      />
    </SPDPage>
  );
}
