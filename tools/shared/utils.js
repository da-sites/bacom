export const codeBase = `${import.meta.url.replace('/tools/shared/utils.js', '')}`;

export const [setNx, getNx] = (() => {
  let nx;
  return [
    (nxBase, location) => {
      nx = (() => {
        const { hostname, search } = location || window.location;
        if (!(hostname.includes('.hlx.') || hostname.includes('local'))) return nxBase;
        const branch = new URLSearchParams(search).get('nx') || 'main';
        if (branch === 'local') return 'http://localhost:6456/nx';
        return branch.includes('--') ? `https://${branch}.hlx.live/nx` : `https://${branch}--nexter--da-sites.hlx.live/nx`;
      })();
      return nx;
    }, () => nx,
  ];
})();
