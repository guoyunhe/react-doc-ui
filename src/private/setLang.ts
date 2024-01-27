const langRegex = /^\/([a-z]{2})\//;

export function setLang(path: string, lang: string) {
  const langMatch = path.match(langRegex);
  if (langMatch) {
    if (lang === 'en') {
      return path.replace(langRegex, '/');
    } else {
      return path.replace(langRegex, '/' + lang + '/');
    }
  } else {
    if (lang === 'en') {
      return path;
    } else {
      return '/' + lang + path;
    }
  }
}
