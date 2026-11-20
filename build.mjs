// Regenerates worker.js from index.html so the Worker serves the page.
import { readFileSync, writeFileSync } from 'node:fs';
const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
writeFileSync(new URL('./worker.js', import.meta.url), `export default {
  async fetch(request) {
    const HTML = ${JSON.stringify(html)};
    if (request.method === 'GET' || request.method === 'HEAD') {
      return new Response(request.method === 'HEAD' ? null : HTML, {
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'public, max-age=300',
          'x-content-type-options': 'nosniff',
          'referrer-policy': 'strict-origin-when-cross-origin'
        }
      });
    }
    return new Response('Method Not Allowed', { status: 405, headers: { allow: 'GET, HEAD' } });
  }
};
`);
console.log('worker.js rebuilt');
