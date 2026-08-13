const CACHE='csir-net-v1';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.add('./index.html'))));
self.addEventListener('fetch',event=>event.respondWith(caches.match(event.request).then(r=>r||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return response;}).catch(()=>caches.match('./index.html')))));
