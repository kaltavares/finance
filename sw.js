// sw.js - Service Worker para MedFinance
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    self.registration.showNotification(event.data.title, {
      body: event.data.body,
      icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
      vibrate: [200, 100, 200],
      tag: event.data.tag || 'medfinance-notification'
    });
  }
});