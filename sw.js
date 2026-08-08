const CACHE='dream-garage-v2-2-0-cloud-20260808';
const ASSETS=['./','./index.html','./supabase-config.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('message',e=>{if(e.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(url.hostname.endsWith('.supabase.co')) return;
  e.respondWith(fetch(e.request).then(resp=>{let cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return resp}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))
});
