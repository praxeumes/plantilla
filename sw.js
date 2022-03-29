
var appShellFiles = [
    //'/',
    '/index.html',
    'images/favicon.png',
    'plugins/bootstrap/bootstrap.min.css',
    'plugins/slick/slick.css',
    'plugins/themify-icons/themify-icons.css',
    'css/style.css',
    'images/logo.png',
    'images/illustrations/leaf-bg.png',
    'images/illustrations/dots-cyan.png',
    'images/illustrations/leaf-orange.png',
    'images/illustrations/dots-orange.png',
    'images/illustrations/leaf-yellow.png',
    'images/illustrations/leaf-cyan.png',
    'images/illustrations/dots-group-orange.png',
    'images/illustrations/leaf-pink-round.png',
    'images/illustrations/leaf-cyan-2.png',
    'images/experience/icon-1.png',
    'images/experience/icon-2.png',
    'images/experience/icon-3.png',
    'images/portfolio/item-1.png',
    'images/portfolio/item-2.png',
    'images/portfolio/item-3.png',
    'images/portfolio/item-4.png',
    'images/portfolio/item-5.png',
    'images/testimonial/client-1.png',
    'images/backgrounds/education-bg.png',
    'plugins/jQuery/jquery.min.js',
    'plugins/bootstrap/bootstrap.min.js',
    'plugins/slick/slick.min.js',
    'plugins/shuffle/shuffle.min.js',
    'js/script.js',
];


self.addEventListener('install', event => {  

  const endInstall = caches.open('box').then( cache =>{  
    return cache.addAll(appShellFiles);
  });

  event.waitUntil( endInstall);

  //self.skipWaiting();
});


self.addEventListener('fetch' , event => {
    event.respondWith( caches.match( event.request));
});