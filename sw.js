self.addEventListener('install' , async function() {
    const cache = await caches.open("swdemo");
    cache.add('/');
    cache.add('index.html');
});


self.addEventListener('fetch', event =>{
    event.respondWith(
        (async function(){
        const cache= await caches.open('swdemo');
        const match  = cache.match(event.request)
        if(match)
        {
            return match;
        }
        return fetch(event.request)
    })()
);
});