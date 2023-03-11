import {
  DocCodeBlock,
  DocContainer,
  DocDemoBlock,
  DocHeader,
  DocHeading,
  DocProvider,
  DocTabCodeBlock,
} from 'react-doc-ui';
// eslint-disable-next-line import/default
import exampleSource from './example.jsx?raw';

const tabExample = `
<DocTabCodeBlock
  files={[
    {
      filename: 'index.js',
      language: 'js',
      code: 'const today = new Date();',
    },
    {
      filename: 'index.css',
      language: 'css',
      code: 'body { background: #fff; }',
    },
    {
      filename: 'index.html',
      language: 'html',
      code: '<html>...</html>',
    },
  ]}
/>
`;

export default function App() {
  return (
    <DocProvider>
      <DocContainer>
        <DocHeader title={PACKAGE_NAME + '@' + PACKAGE_VERSION} />

        <p>React UI components for making documents.</p>

        <DocHeading>Features</DocHeading>

        <ul>
          <li>Code syntax highlight, supporting multiple file tabs</li>
          <li>Dark/light mode switcher</li>
        </ul>

        <DocHeading>Install</DocHeading>

        <DocCodeBlock language="bash" code="npm i react-doc-ui" />

        <DocHeading>Usage</DocHeading>

        <DocCodeBlock language="jsx" code={exampleSource} />

        <DocHeading>DocProvider</DocHeading>
        <p>Wrap the whole React app</p>
        <DocCodeBlock language="jsx" code="<DocProvider>...</DocProvider>" />

        <DocHeading>DocContainer</DocHeading>
        <p>Centered container. Maximum width 800 by default.</p>
        <DocCodeBlock language="jsx" code="<DocContainer maxWidth={960}>...</DocContainer>" />

        <DocHeading>DocHeader</DocHeading>
        <p>Page title, theme switcher, etc.</p>
        <DocCodeBlock language="jsx" code={`<DocHeader title="My Title" />`} />

        <DocHeading>DocHeading</DocHeading>
        <p>Section heading</p>
        <DocCodeBlock language="jsx" code={`<DocHeading level={2}>How to use</DocHeading>`} />

        <DocHeading>DocDemoBlock</DocHeading>
        <p>Area for demo UI</p>
        <DocDemoBlock>Hello World</DocDemoBlock>
        <DocCodeBlock language="jsx" code={`<DocDemoBlock>Hello World</DocDemoBlock>`} />

        <DocHeading>DocCodeBlock</DocHeading>
        <p>Area for source code with syntax highlighting</p>
        <DocCodeBlock
          language="jsx"
          code={`<DocCodeBlock language="js" code="const today = new Date();" />`}
        />

        <DocHeading>DocTabCodeBlock</DocHeading>
        <p>Tabbed UI for multiple source code files</p>
        <DocTabCodeBlock
          files={[
            {
              filename: 'index.js',
              language: 'jsx',
              code: tabExample,
            },
            {
              filename: 'index.css',
              language: 'jsx',
              code: `body { background: #fff; }`,
            },
            {
              filename: 'index.html',
              language: 'jsx',
              code: `<html>...</html>`,
            },
          ]}
        />
      </DocContainer>
    </DocProvider>
  );
}
