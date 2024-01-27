import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { DocLanguage, MDXDoc } from '../types';
import './SiteNav.css';
import { getLang } from './getLang';
import { getRoutePath } from './getRoutePath';

export interface SiteNavProps {
  docs: MDXDoc[];
  languages?: DocLanguage[];
  lang?: string;
}

export function SiteNav({ docs, languages }: SiteNavProps) {
  const { i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <aside className="doc-ui-site-nav">
      <nav className="doc-ui-site-nav-inner">
        {docs
          .filter((doc) => getLang(doc.filepath) === i18n.language)
          .map((doc) => ({
            title: doc.title,
            path: getRoutePath(doc.filepath),
          }))
          .sort((a, b) => a.path.localeCompare(b.path))
          .map((doc) => (
            <NavLink
              key={doc.path}
              className="doc-ui-site-nav-item"
              to={getRoutePath(doc.path)}
              end
            >
              {doc.title}
            </NavLink>
          ))}
        {languages && (
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
      </nav>
    </aside>
  );
}
