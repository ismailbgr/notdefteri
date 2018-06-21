const expectedCaches = ['ibgr-notdefteri-v0.0.1'];

self.addEventListener('install', function(e) {
  self.skipWaiting();
 e.waitUntil(
   caches.open('ibgr-notdefteri-v0.1').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/manifest.json',
       '/icon.png'
     ]);
   })
 );
});




self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!expectedCaches.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('ibgr-notdefteri-v0.1 İstek İşlemeye Hazır');
    })
  );
});





self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});