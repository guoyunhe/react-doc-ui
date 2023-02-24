import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { githubLight } from './themes';

export interface CodeBlockProps {
  children: string;
  language?: Language;
}

export function CodeBlock({ children, language = 'tsx' }: CodeBlockProps) {
  return (
    <Highlight {...defaultProps} theme={githubLight} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            padding: 16,
            fontSize: '13px',
            fontFamily:
              'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace',
            lineHeight: 1.45,
            ...style,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
