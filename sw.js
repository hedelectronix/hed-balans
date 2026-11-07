// Hed balans: oddiy service worker (ilova o'rnatilishi uchun). Doim internetdan oladi, keshni ishlatmaydi.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{});
