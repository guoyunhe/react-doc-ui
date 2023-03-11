import { DocContainer, DocDemoBlock, DocProvider, DocTabCodeBlock } from 'react-doc-ui';
import { DocHeader } from '../src/DocHeader';

export default function App() {
  return (
    <DocProvider>
      <DocContainer>
        <DocHeader />

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
