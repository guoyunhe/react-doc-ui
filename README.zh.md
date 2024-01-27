# React Doc UI

## 安装

```bash
npm i react-doc-ui
```

## 使用

```jsx
import cn from 'classnames';

function App() {
  return <div className={cn('foo', 'bar')}>foobar</div>;
}
```

```jsx
import cn from 'classnames';

function foobar() {
  return 'foobar';
}

function App() {
  return <div className={cn('foo', 'bar')}>foobar</div>;
}

render(<App />);
```

[full document with examples](https://guoyunhe.github.io/react-doc-ui/)
