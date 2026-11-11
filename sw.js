// ホーム画面アプリとして認識させるための最小限の仕掛け。
// データは毎回サーバーから取るので、ここでは何も保存しない。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
