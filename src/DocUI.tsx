import '@guoyunhe/prism-theme-github/github-light.css';
import { MDXProvider } from '@mdx-js/react';
import cn from 'classnames';
import { createInstance } from 'i18next';
import { CSSProperties, useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Route, Router, Switch } from 'wouter';
import './DocUI.css';
import { SiteNav } from './private/SiteNav';
import { components } from './private/components';
import { getRoutePath } from './private/getRoutePath';
import { DocLanguage, MDXDoc } from './types';

export interface DocUIProps {
  /**
   * Imported Markdown/MDX files. For example:
   *
   * ```jsx
   * import * as readme from './README.md';
   * import * as changelog from './CHANGELOG.md';
   *
   * <DocUI docs={[ readme, changelog ]} />
   * ```
   */
  docs?: MDXDoc[];
  /**
   * React Router basename
   */
  basename?: string;
  /**
   * Supported languages
   */
  languages?: DocLanguage[];
  /**
   * Extra className.
   */
  className?: string;
  /**
   * Extra style.
   */
  style?: CSSProperties;
}

export function DocUI({
  docs = [],
  basename,
  languages,
  className,
  style,
}: DocUIProps) {
  console.log(docs);
  const i18n = useMemo(() => {
    const i18n = createInstance({
      fallbackLng: 'en',
      supportedLngs: languages?.map((lang) => lang.code),
      debug: true,

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },

      resources: {
        en: {
          translation: {
            hello: 'Hello from other i18n instance',
          },
        },
        de: {
          translation: {
            hello: 'Hallo aus einer anderen i18n Instanz',
          },
        },
      },
    });

    i18n.init();
    return i18n;
  }, [languages]);

  return (
    <I18nextProvider i18n={i18n}>
      <div className={cn('doc-ui', className)} style={style}>
        <Router base={basename.replace(/\/+$/, '')}>
          <SiteNav languages={languages} docs={docs} />
          <main className="doc-ui-main">
            <article className="doc-ui-content">
              <MDXProvider components={components}>
                <Switch>
                  {docs.map((doc) => (
                    <Route
                      key={doc.filepath}
                      path={getRoutePath(doc.filepath)}
                      component={doc.default as any}
                    />
                  ))}
                </Switch>
              </MDXProvider>
            </article>
          </main>
        </Router>
      </div>
    </I18nextProvider>
  );
}
