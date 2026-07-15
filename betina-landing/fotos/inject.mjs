import fs from 'node:fs';
import path from 'node:path';
const WEB = '/home/user/Draling.ia/betina-landing/fotos/web';
const HTML = '/home/user/Draling.ia/betina-landing/index.html';
const ids = fs.readdirSync(WEB).filter(f => f.endsWith('.webp')).map(f => f.replace('.webp',''));
const entries = ids.map(id => {
  const b64 = fs.readFileSync(path.join(WEB, `${id}.webp`)).toString('base64');
  return `"${id}":"data:image/webp;base64,${b64}"`;
});
let html = fs.readFileSync(HTML, 'utf8');
const marker = 'window.__PHOTOS = {/*__PHOTO_DATA__*/};';
if (html.includes(marker)) {
  html = html.replace(marker, `window.__PHOTOS = {${entries.join(',')}};`);
} else {
  html = html.replace(/window\.__PHOTOS = \{[\s\S]*?\};(\s*<\/script>)/, `window.__PHOTOS = {${entries.join(',')}};$1`);
}
fs.writeFileSync(HTML, html);
console.log('Inyectadas', ids.length, 'fotos:', ids.sort().join(', '));
console.log('Tamano index.html:', (fs.statSync(HTML).size/1024/1024).toFixed(2)+'MB');
