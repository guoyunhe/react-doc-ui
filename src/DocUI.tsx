import '@guoyunhe/prism-theme-github/github-light.css';
import { MDXProvider } from '@mdx-js/react';
import cn from 'classnames';
import { CSSProperties } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './DocUI.css';
import { SiteNav } from './private/SiteNav';
import { components } from './private/components';
import { getRoutePath } from './private/getRoutePath';
import { MDXDoc } from './types';

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
   * Extra className.
   */
  className?: string;
  /**
   * Extra style.
   */
  style?: CSSProperties;
}

export function DocUI({ docs = [], basename, className, style }: DocUIProps) {
  return (
    <BrowserRouter basename={basename}>
      <div className={cn('doc-ui', className)} style={style}>
        <SiteNav docs={docs} />
        <main className="doc-ui-main">
          <article className="doc-ui-content">
            <MDXProvider components={components}>
              <Routes>
                {docs.map((doc) => (
                  <Route
                    index={doc.filepath === 'README.md'}
                    key={doc.filepath}
                    path={getRoutePath(doc.filepath)}
                    Component={doc.default}
                  />
                ))}
              </Routes>
            </MDXProvider>
          </article>
        </main>
      </div>
    </BrowserRouter>
  );
}
