import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { DocLanguage, MDXDoc } from '../types';
import './SiteNav.css';
import { getLang } from './getLang';
import { getRoutePath } from './getRoutePath';
import { setLang } from './setLang';

export interface SiteNavProps {
  docs: MDXDoc[];
  languages?: DocLanguage[];
  lang?: string;
}

export function SiteNav({ docs, languages }: SiteNavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const newPath = setLang(location.pathname, i18n.language);
    if (newPath !== location.pathname) {
      navigate(newPath);
    }
  }, [i18n.language, location.pathname, navigate]);

  const docsFilteredByLang = docs.filter(
    (doc) => getLang(doc.filepath) === i18n.language
  );

  const groups: string[] = [];

  docsFilteredByLang.forEach((doc) => {
    if (doc.frontmatter?.group && !groups.includes(doc.frontmatter.group)) {
      groups.push(doc.frontmatter.group);
    }
  });

  return (
    <aside className="doc-ui-site-nav">
      <nav className="doc-ui-site-nav-inner">
        {docsFilteredByLang
          .filter((doc) => !doc.frontmatter?.group)
          .map((doc) => ({
            title: doc.title,
            path: getRoutePath(doc.filepath),
            group: doc.frontmatter?.group,
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

        {groups.map((group) => (
          <div key={group} className="doc-ui-site-nav-group">
            <div className="doc-ui-site-nav-group-title">{group}</div>
            {docsFilteredByLang
              .filter((doc) => group === doc.frontmatter?.group)
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
          </div>
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
