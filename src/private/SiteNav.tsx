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

  const docsFilteredByLang = docs
    .filter((doc) => getLang(doc.filepath) === i18n.language)
    .map((doc) => ({
      title: doc.title,
      path: getRoutePath(doc.filepath),
      group: doc.frontmatter?.group,
      order: doc.frontmatter?.order,
    }))
    .sort((a, b) => {
      if (typeof a.order === 'number' && typeof b.order === 'number') {
        return a.order - b.order;
      } else if (typeof a.order === 'number') {
        return -1;
      } else if (typeof b.order === 'number') {
        return 1;
      } else {
        return a.path.localeCompare(b.path);
      }
    });
  const groups: string[] = [];

  docsFilteredByLang.forEach((doc) => {
    if (doc.group && !groups.includes(doc.group)) {
      groups.push(doc.group);
    }
  });

  return (
    <aside className="doc-ui-site-nav">
      <nav className="doc-ui-site-nav-inner">
        <div className="doc-ui-site-settings">
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
        </div>
        {docsFilteredByLang
          .filter((doc) => !doc.group)
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
              .filter((doc) => group === doc.group)
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
      </nav>
    </aside>
  );
}
