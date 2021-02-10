if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"faee6c4e8d7b6422f6067cde9c1e7e23","url":"27826fdf8f8b3b9166cd.worker.js"},{"revision":"bad0dd81c4496ea68e751f2c78526cc9","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"bad0dd81c4496ea68e751f2c78526cc9","url":"index.html"},{"revision":"a2a498f94282c8de14b850e84cc62f07","url":"precache-manifest.a2a498f94282c8de14b850e84cc62f07.js"},{"revision":"4106c517347acae79f966f6492797959","url":"static/css/14.aa9ef476.chunk.css"},{"revision":"dd5a04426790bd19ca34854dd42dac30","url":"static/js/0.668fa44e.chunk.js"},{"revision":"c951c15a5e8ed9e6d74ce288a8785c4f","url":"static/js/1.1fb1b76e.chunk.js"},{"revision":"7b8174651c8900b47689cd6678fce544","url":"static/js/10.6e04581f.chunk.js"},{"revision":"3fe32504360adb45592e1e784d706f6d","url":"static/js/11.977af195.chunk.js"},{"revision":"03743c66736400f73888869fe4615dc5","url":"static/js/12.21272d94.chunk.js"},{"revision":"7efdcaae1141b113e7c2f35c91b315db","url":"static/js/13.be94f11a.chunk.js"},{"revision":"363f433330a93794b7bae1dbe66a6b0b","url":"static/js/14.6eca589a.chunk.js"},{"revision":"b5e0cbb4d22b5b045ff2e7237ed2b483","url":"static/js/15.698ef7ff.chunk.js"},{"revision":"58c4a37c897ebd9266842b311140efcc","url":"static/js/16.c33b019c.chunk.js"},{"revision":"83c3cc65064f64a37b51a4d90aa1a652","url":"static/js/17.a9ad8f21.chunk.js"},{"revision":"3055e5baa220d722f990e26db594e9c2","url":"static/js/18.79e855fa.chunk.js"},{"revision":"eb9fb3f0387bfdbd67bc5ef9d84547b8","url":"static/js/19.fdbd0a6a.chunk.js"},{"revision":"d50d4079049e18599000ca7ee6ae937c","url":"static/js/2.9dc2b985.chunk.js"},{"revision":"14e9d6424fb25f4f647ae4cd0c90d511","url":"static/js/20.6ba690f9.chunk.js"},{"revision":"8d7a466bb7160db25d56e74f159d333f","url":"static/js/21.b9198d41.chunk.js"},{"revision":"39b24b94b5bd5f27985b8e8de13a5425","url":"static/js/22.776b1065.chunk.js"},{"revision":"67103903c2474e6039c45a74ee9fb347","url":"static/js/23.b1000aab.chunk.js"},{"revision":"3c66b5225af4be20d46ebe426d0a5a36","url":"static/js/24.8eaf6069.chunk.js"},{"revision":"9373dcd367d42efcd34d5d1ffe2c41d8","url":"static/js/25.608d0edb.chunk.js"},{"revision":"3f12ee02970fb0032a50a5f705c73cbd","url":"static/js/26.fc8bd9de.chunk.js"},{"revision":"04f9e987c6c229108af1b47c3123bad2","url":"static/js/27.d4612665.chunk.js"},{"revision":"449eb2aba6f41eba0d3da5a0e0bc01d8","url":"static/js/28.ca06309c.chunk.js"},{"revision":"91cc4b88b79b848f6c3770fe7ed54cd5","url":"static/js/29.e77f73a2.chunk.js"},{"revision":"27b4db684c521f9a659ff6095bcfb271","url":"static/js/3.1a55f62c.chunk.js"},{"revision":"38b85372c790e7eb59a641da051c48ef","url":"static/js/30.f1971b60.chunk.js"},{"revision":"a07844a222ef7da040abef84205b8a64","url":"static/js/31.b51444f8.chunk.js"},{"revision":"c72fe8336c2c86dde4f1783080a339d9","url":"static/js/32.7fe951f0.chunk.js"},{"revision":"363c8d626b990c0d23ead0eaf2b87a2a","url":"static/js/33.5f90530d.chunk.js"},{"revision":"031fdf17c664b8b5c1f5ef3d6e7bf1bc","url":"static/js/34.f7fa4884.chunk.js"},{"revision":"e53274109d7f25e964c1cebaca077b6a","url":"static/js/35.64f36713.chunk.js"},{"revision":"903cea094a7920b723a81d0c196c0d73","url":"static/js/36.f4629458.chunk.js"},{"revision":"c612ffa473c2fa7f38ca7100a26490c5","url":"static/js/37.921ab584.chunk.js"},{"revision":"2d43f668512b9a858f42b41bf0254097","url":"static/js/4.48a698fe.chunk.js"},{"revision":"62e55df44e806851b648183b3f8255b4","url":"static/js/5.aa9589f9.chunk.js"},{"revision":"0ac2621b6f0e40cbc9f1373a68efec51","url":"static/js/8.baa3474c.chunk.js"},{"revision":"817c8fd5e9a649b9a485ab8111c5d7f9","url":"static/js/9.15fe78d6.chunk.js"},{"revision":"4a50edfe916b68a61811ad88dbe7cd00","url":"static/js/main.f8c2e861.chunk.js"},{"revision":"229ba57f0c927d3d21ed705f37442c4d","url":"static/js/runtime-main.4bf30ce4.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
