'./index.html',

'./assets/css/bootstrap.min.css',

'./assets/js/bootstrap.min.js',

'./assets/js/jquery.min.js',

'./assets/js/popper.min.js',

   
'./assets/AppIcons/android/mipmap-hdpi/ic_launcher.png',
'./assets/AppIcons/android/mipmap-mdpi/ic_launcher.png',
'./assets/AppIcons/android/mipmap-xhdpi/ic_launcher.png',
'./assets/AppIcons/android/mipmap-xxhdpi/ic_launcher.png',
'./assets/AppIcons/android/mipmap-xxxhdpi/ic_launcher.png',


    './assets/AppIcons/appstore.png',
    './assets/AppIcons/playstore.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_16.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_64.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_92.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_102.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_216.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_20.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_32.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_40.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_48.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_50.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_55.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_60.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_66.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_72.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_76.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_88.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_100.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_114.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_128.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_144.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_152.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_167.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_172.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_196.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_256.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_512.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_1024.png'



    './assets/img/testimonials/testimonial-1.jpg',
    './assets/img/testimonials/testimonial-2.jpg',
    './assets/img/testimonials/testimonial-3.jpg',
    './assets/img/testimonials/testimonial-4.jpg',
    './assets/img/testimonials/testimonial-5.jpg'

    // service-worker.js

// Define o nome do cache
const cacheName = 'wild-life-cache';

// Lista de arquivos a serem armazenados em cache, incluindo imagens
const filesToCache = [
  '/',
  './index.html',

'./assets/css/bootstrap.min.css',

'./assets/js/bootstrap.min.js',

'./assets/js/jquery.min.js',

'./assets/js/popper.min.js',

   
'./assets/AppIcons/android/mipmap-hdpi/ic_launcher.png',
'./assets/AppIcons/android/mipmap-mdpi/ic_launcher.png',
'./assets/AppIcons/android/mipmap-xhdpi/ic_launcher.png',
'./assets/AppIcons/android/mipmap-xxhdpi/ic_launcher.png',
'./assets/AppIcons/android/mipmap-xxxhdpi/ic_launcher.png',


    './assets/AppIcons/appstore.png',
    './assets/AppIcons/playstore.png',
    
    
    './assets/AppIcons/AssetsApp/AppIconSet/icon_16.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_64.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_92.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_102.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_216.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_20.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_32.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_40.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_48.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_50.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_55.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_60.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_66.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_72.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_76.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_88.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_100.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_114.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_128.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_144.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_152.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_167.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_172.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_196.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_256.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_512.png',
    './assets/AppIcons/AssetsApp/AppIconSet/icon_1024.png'


    
];

// Evento de instalação do service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// Evento de ativação do service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== cacheName) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

// Evento de busca de recursos do service worker
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});