import { setNx, codeBase } from './utils.js';

const CONFIG = {
  codeBase,
  imsClientId: 'da-bacom',
  imsScope: 'AdobeID,gnav,openid',
};

const nx = setNx('/nx');
const { loadArea, setConfig, loadStyle } = await import(`${nx}/scripts/nexter.js`);

const styles = [`${nx}/styles/nexter.css`];
styles.forEach((style) => loadStyle(style));

setConfig(CONFIG);
loadArea();
