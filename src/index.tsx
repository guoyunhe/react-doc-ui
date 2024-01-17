import cn from 'classnames';
import { CSSProperties, ComponentType } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { getRoutePath } from './private/getRoutePath';

export * from './DocCodeBlock';
export * from './DocContainer';
export * from './DocContext';
export * from './DocDemoBlock';
export * from './DocHeader';
export * from './DocHeading';
export * from './DocProvider';
export * from './DocTabCodeBlock';
export * from './useDoc';

export interface MDXDoc {
  default: ComponentType;
  /**
   * @see https://github.com/remcohaszing/recma-export-filepath
   */
  filepath: string;
  /**
   * @see https://github.com/remcohaszing/remark-mdx-frontmatter
   */
  frontmatter?: Record<string, any>;
  /**
   * @see https://github.com/remcohaszing/rehype-mdx-title
   */
  title?: string;
}

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
   * Extra className.
   */
  className?: string;
  /**
   * Extra style.
   */
  style?: CSSProperties;
}

export default function DocUI({ docs = [], className, style }: DocUIProps) {
  return (
    <BrowserRouter>
      <div className={cn('doc-ui', className)} style={style}>
        <aside>
          {docs.map((doc) => (
            <NavLink key={doc.filepath} to={getRoutePath(doc.filepath)}>
              {doc.title}
            </NavLink>
          ))}
        </aside>
        <main>
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
        </main>
        <aside>{}</aside>
      </div>
    </BrowserRouter>
  );
}
