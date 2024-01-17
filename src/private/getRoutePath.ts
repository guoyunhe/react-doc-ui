export function getRoutePath(filepath: string) {
  let routePath = filepath.startsWith('/') ? filepath : '/' + filepath;
  routePath = routePath.replace(/(\/README)?\.md$/, '/');
  return routePath;
}
