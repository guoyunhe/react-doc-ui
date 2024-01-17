import { NavLink } from 'react-router-dom';
import { MDXDoc } from '../types';
import './SiteNav.css';
import { getRoutePath } from './getRoutePath';

export interface SiteNavProps {
  docs: MDXDoc[];
}

export function SiteNav({ docs }: SiteNavProps) {
  return (
    <aside className="doc-ui-site-nav">
      <nav className="doc-ui-site-nav-inner">
        {docs
          .map((doc) => ({ title: doc.title, path: getRoutePath(doc.filepath) }))
          .sort((a, b) => a.path.localeCompare(b.path))
          .map((doc) => (
            <NavLink key={doc.path} className="doc-ui-site-nav-item" to={getRoutePath(doc.path)}>
              {doc.title}
            </NavLink>
          ))}
      </nav>
    </aside>
  );
}
