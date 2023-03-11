import { DocContainer, DocDemoBlock, DocProvider, DocTabCodeBlock } from 'react-doc-ui';

export default function App() {
  return (
    <DocProvider>
      <DocContainer>
        <div style={{ fontSize: 14 }}>
          Please edit <code style={{ color: '#ff8800', fontSize: 14 }}>docs/App.tsx</code> file
        </div>

        <DocDemoBlock>Foobar</DocDemoBlock>

        <DocTabCodeBlock
          files={[
            {
              filename: 'index.tsx',
              language: 'tsx',
              code: 'yoo',
            },
          ]}
        />
      </DocContainer>
    </DocProvider>
  );
}
