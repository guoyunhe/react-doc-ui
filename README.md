# react-doc-ui

## Install

```bash
npm i react-doc-ui
```

## Usage

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { DocContainer, DocDemoBlock, DocHeader, DocProvider, DocCodeBlock } from 'react-doc-ui';

const rootElem = document.getElementById('root');
const root = createRoot(rootElem);
root.render(<App />);

function App() {
  return (
    <DocProvider>
      <DocContainer>
        <DocHeader title="Cool Proj v1.0" />

        <DocDemoBlock>
          <MyComponent>Hello, World!</MyComponent>
        </DocDemoBlock>

        <DocCodeBlock language="jsx" code="<MyComponent>Hello, World!</MyComponent>" />
      </DocContainer>
    </DocProvider>
  );
}
```

[full document with examples](https://guoyunhe.github.io/react-doc-ui/)
