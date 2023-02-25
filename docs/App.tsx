import { CodeBlock } from '../src/CodeBlock';

export default function App() {
  return (
    <div>
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
    </div>
  );
}
