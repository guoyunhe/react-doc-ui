import Highlight, { defaultProps, Language as BaseLanguage } from 'prism-react-renderer';

const languageAliasDict = {
  cjs: 'javascript',
  cts: 'typescript',
  htm: 'markup',
  html: 'markup',
  js: 'javascript',
  md: 'markdown',
  mjs: 'javascript',
  mts: 'typescript',
  svg: 'markup',
  ts: 'typescript',
  xml: 'markup',
  yml: 'yaml',
};

type LanguageAlias = keyof typeof languageAliasDict;

export type Language = LanguageAlias | BaseLanguage;

function mapLang(language: Language): BaseLanguage {
  return (languageAliasDict[language as LanguageAlias] || language) as BaseLanguage;
}

export interface HighlighterProps {
  code: string;
  language: Language;
}

export function Highlighter({ code, language }: HighlighterProps) {
  return (
    <Highlight
      {...defaultProps}
      theme={undefined} // disable default theme
      code={code.trim()}
      language={mapLang(language)}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
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
