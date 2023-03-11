import {
  DocCodeBlock,
  DocContainer,
  DocDemoBlock,
  DocHeader,
  DocHeading,
  DocProvider,
} from 'react-doc-ui';

const source = `
import { MyComponent } from 'myPackage';

<MyComponent/>
`;

function MyComponent({ children }) {
  return <div>{children}</div>;
}

function App() {
  return (
    <DocProvider>
      <DocContainer>
        <DocHeader title="My Package" />
        <p>My package description...</p>

        <DocHeading>Install</DocHeading>
        <DocCodeBlock language="bash" code="npm i my-package" />

        <DocHeading>Usage</DocHeading>
        <DocDemoBlock>
          <MyComponent />
        </DocDemoBlock>
        <DocCodeBlock language="jsx" code={source} />
      </DocContainer>
    </DocProvider>
  );
}
