import puppeteer from 'puppeteer-core';
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root=path.resolve(process.argv[2],'site/out');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp'};
const srv=http.createServer((q,r)=>{let p=q.url.split('?')[0];if(p.endsWith('/'))p+='index.html';const f=path.join(root,p);if(!fs.existsSync(f)){r.statusCode=404;return r.end()}r.setHeader('content-type',types[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(r)}).listen(0);
const b=await puppeteer.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const p=await b.newPage();await p.setViewport({width:390,height:844,isMobile:true});await p.goto(`http://localhost:${srv.address().port}/`,{waitUntil:'networkidle0'});
console.log(await p.evaluate(()=>{const vw=document.documentElement.clientWidth;return [...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>vw+1&&!e.closest('[aria-hidden=true]')).slice(0,6).map(e=>e.tagName+'.'+String(e.className).slice(0,50)+' '+Math.round(e.getBoundingClientRect().right))}));
await b.close();srv.close();
