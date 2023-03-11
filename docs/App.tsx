import { DocContainer, DocDemoBlock, DocHeader, DocProvider, DocTabCodeBlock } from 'react-doc-ui';

export default function App() {
  return (
    <DocProvider>
      <DocContainer>
        <DocHeader title={PACKAGE_NAME + '@' + PACKAGE_VERSION} />

        <DocDemoBlock>Foobar</DocDemoBlock>

        <DocTabCodeBlock
          files={[
            {
              filename: 'index.tsx',
              language: 'tsx',
              code: 'yoo',
            },
            {
              filename: 'index.css',
              language: 'css',
              code: 'yoo',
            },
          ]}
        />
      </DocContainer>
    </DocProvider>
  );
}
