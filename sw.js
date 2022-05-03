importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.0/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"564c7c3a509f03d313a9f45dd5217c7c","url":"assets/css/0.styles.34e734ab.css"},{"revision":"807d00623f5c47e71144cf7347950350","url":"assets/data/404/index.json"},{"revision":"d9c2146185d117d7f131eefa4339a35d","url":"assets/data/AlexaBeach/index.json"},{"revision":"c64ff8f4822d83bcf2b022ec21a9f889","url":"assets/data/AlyBrine/index.json"},{"revision":"7bf1176247664f64e3a0a50e3c8aa09f","url":"assets/data/AmandaPerkins/index.json"},{"revision":"2dccce1db5d4f72a350a46b3041d35fd","url":"assets/data/AndrewKnight/index.json"},{"revision":"5e71fa9771dedd65fcf943a09ec6e5f4","url":"assets/data/AndyWarns/index.json"},{"revision":"fa26321be4f2396898928df07ac15d21","url":"assets/data/AngieJones/index.json"},{"revision":"279b2e983e719097096b6a88ed0a0387","url":"assets/data/BenOconis/index.json"},{"revision":"c816024d5e4f97e97de7700b036204d9","url":"assets/data/CarlosKidman/index.json"},{"revision":"d7e71a747c4d6dfa9a3a5b143b89dd7d","url":"assets/data/DamianSynadinos/index.json"},{"revision":"14796711508e3b93abbbd9989181552e","url":"assets/data/DarrelFarris/index.json"},{"revision":"9d7224d073b217260ae989f522e4d21e","url":"assets/data/EranKinsbruner/index.json"},{"revision":"28326b5145d4b23222c007a2ec047d03","url":"assets/data/index.json"},{"revision":"e7b27d5871b519d85679c8d977fcd1c7","url":"assets/data/JacobHaning/index.json"},{"revision":"d17ead8647181d40f3b2e46bff0bc1a2","url":"assets/data/JamieKelley/index.json"},{"revision":"0fab93315f37ee8bfa2958c7e06b08d1","url":"assets/data/JeffSing/index.json"},{"revision":"02f5937760bd6d8538aaa5a71e765130","url":"assets/data/JennaCharlton/index.json"},{"revision":"6427671d675f667d6dcf83c11ef15d1d","url":"assets/data/JerrenEvery/index.json"},{"revision":"405eb0392b35269e54a7cc6d866f291b","url":"assets/data/JoelMontvelisky/index.json"},{"revision":"f6fdb00422f5dd742fb02255c35c1870","url":"assets/data/JustinHunter/index.json"},{"revision":"7ad534c16dd4a297f462cbf0ad64fa6f","url":"assets/data/LeandroMelendez/index.json"},{"revision":"c9cf6ffa885b490d69cdea6333cf624f","url":"assets/data/LeeBarnes/index.json"},{"revision":"cd3dd8b80518fc89ff29119879cae958","url":"assets/data/MalaPunyani/index.json"},{"revision":"8d51aba7dd3f6f2c9e9027b6f21e6c3c","url":"assets/data/MatthewEakin/index.json"},{"revision":"86e13daac6255567f8cb21dd1e041d41","url":"assets/data/MelissaTondi/index.json"},{"revision":"fb1a63f383e4814a3f6118fd08da6b47","url":"assets/data/MohitaPrasad/index.json"},{"revision":"49a6508374af422c79467e9dc887def3","url":"assets/data/PetrosPlakogiannis/index.json"},{"revision":"88d157790e4a8b08534c9358b2ec6a08","url":"assets/data/RobertFornal/index.json"},{"revision":"c55e5bbdd502790b63ed2d822c342308","url":"assets/data/ShyamSunder/index.json"},{"revision":"1738fd9e6aef571ea16b162ce886190e","url":"assets/data/StacyWyatt/index.json"},{"revision":"a684db92043c0a8125dce9528ab1c1b1","url":"assets/data/ThomasHaver/index.json"},{"revision":"67cecc1c2e70f020ef9a6c6b6b71d49b","url":"assets/data/TitusFortner/index.json"},{"revision":"d9cfd79e017d2585858e2e3522efebd5","url":"assets/img/alexa beach.d9cfd79e.webp"},{"revision":"ecd267a7749713ed9a3bc4aa651ebfae","url":"assets/img/aly brine.ecd267a7.webp"},{"revision":"b991fcb376400761a08c22477a1c5523","url":"assets/img/andrew knight.b991fcb3.webp"},{"revision":"9e04b8033ee7519f5586233bb1216f7c","url":"assets/img/andy warns.9e04b803.webp"},{"revision":"ee9a40d78a4ac767e2aa4e6ab75d6be3","url":"assets/img/angie jones.ee9a40d7.webp"},{"revision":"87812dfb4325551ec1046c8f017c5b96","url":"assets/img/ballroom.87812dfb.png"},{"revision":"542d556d133e6914c4caff7838bbcc2f","url":"assets/img/ben oconis.542d556d.webp"},{"revision":"2bc6e9b27dc0924b2b1ba181823c008c","url":"assets/img/carlos kidman.2bc6e9b2.webp"},{"revision":"3657007491bce650ad011a7ee07df08b","url":"assets/img/cartoonroom.36570074.png"},{"revision":"76d3eefced571f14225daae2f1be34fa","url":"assets/img/damian synadinos.76d3eefc.webp"},{"revision":"fe9937c427d8e3a7940cd8c9ded44905","url":"assets/img/darrel farris.fe9937c4.webp"},{"revision":"3e12aa9b89c300f5c6f6e226a4c36bba","url":"assets/img/eran kinsbruner.3e12aa9b.webp"},{"revision":"fb2c2b3c5a13daad62ffe053d8777cef","url":"assets/img/generic-profile.fb2c2b3c.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall12.20afd1a9.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall3.20afd1a9.png"},{"revision":"2da60d2127424f4ef413509e4f2fea19","url":"assets/img/interfaithroom.2da60d21.png"},{"revision":"99a6752b7082dc5d6dc654f4677fff63","url":"assets/img/jacob haning.99a6752b.webp"},{"revision":"7817176bd214990a1bc72ecc1957425f","url":"assets/img/jamie kelley.7817176b.webp"},{"revision":"c48b81ceba055ba2f62e1b722a928d6a","url":"assets/img/jeff sing.c48b81ce.webp"},{"revision":"f85744f5512faf1becbd52c23c398175","url":"assets/img/jenna charlton.f85744f5.webp"},{"revision":"901bf5239d447401e6d0175192ae8cbe","url":"assets/img/jerren every.901bf523.webp"},{"revision":"54dff9dd2f761f8b931d32e3f914d808","url":"assets/img/joel montvelisky.54dff9dd.webp"},{"revision":"24c5f269b789f598ec8d25f3485f38b1","url":"assets/img/leandro melendez.24c5f269.webp"},{"revision":"f3aa77319cac7c0ae697ce69681dba23","url":"assets/img/lee barnes.f3aa7731.webp"},{"revision":"f1be2743579f552a5b5fa03d543dd6d0","url":"assets/img/mala punyani.f1be2743.webp"},{"revision":"b85dc285eda9e340ff1a753ecc082211","url":"assets/img/melissa tondi.b85dc285.webp"},{"revision":"7205ac706cbbadfc536aa1b0755a0b4b","url":"assets/img/mohita prasad.7205ac70.webp"},{"revision":"11019bb638eee2b03c5f20206dcdf749","url":"assets/img/petros plakogiannis.11019bb6.webp"},{"revision":"a6598449f850f97af831b3d6741c417e","url":"assets/img/robert fornal.a6598449.webp"},{"revision":"fdbab44df63ad36b031444c290be8dbc","url":"assets/img/stacy wyatt.fdbab44d.webp"},{"revision":"f68b18deef878cf92bccf40c79e7be8f","url":"assets/img/studentalumniroom.f68b18de.png"},{"revision":"a939ecb91e885b9cfa5725aef3d4e54c","url":"assets/img/titus fortner.a939ecb9.webp"},{"revision":"10271f7273a511018eaf327471a234d6","url":"assets/img/usbanktheater.10271f72.png"},{"revision":"4a427ebe01fde5245f0380e427b53b77","url":"assets/js/app.e4d154fb.js"},{"revision":"4938d31e47942185ca847e5cf6dd2eed","url":"assets/js/page--src--pages--404-vue.6ad48137.js"},{"revision":"19bbf708cbd0adf49a4a60c63fbfaaea","url":"assets/js/page--src--pages--index-vue.4c7ea42e.js"},{"revision":"cfd64977de463eb135794632abb93301","url":"assets/js/page--src--templates--session-vue.88cf1387.js"},{"revision":"14abed9ce0e092b924639ca0ffd03b62","url":"assets/static/favicon.1539b60.af23d950429ffb54e42245904932783f.png"},{"revision":"b30ee95be125d7dff57231f889ac7c3e","url":"assets/static/favicon.62d22cb.af23d950429ffb54e42245904932783f.png"},{"revision":"0ab2d751cb5628b9c426d0af9dd5497f","url":"assets/static/favicon.7b22250.af23d950429ffb54e42245904932783f.png"},{"revision":"af49ef7347f7b4eec089a8c8f25fbd65","url":"assets/static/favicon.ac8d93a.af23d950429ffb54e42245904932783f.png"},{"revision":"dfc344bbd6ac9f6969c7b87c9068e30a","url":"assets/static/favicon.b9532cc.af23d950429ffb54e42245904932783f.png"},{"revision":"1eac566b8bcb4dde804bf8902c5939c7","url":"assets/static/favicon.ce0531f.af23d950429ffb54e42245904932783f.png"},{"revision":"7932a6488b5327c3f5b37153d4f97aa1","url":"assets/static/favicon.dc0cdc5.af23d950429ffb54e42245904932783f.png"},{"revision":"9383235b27041f682d1e6ef3fb21f393","url":"assets/static/favicon.f22e9f3.af23d950429ffb54e42245904932783f.png"},{"revision":"0fef8d1d8f29f26603d0d4287f13bc6c","url":"data.json"},{"revision":"af23d950429ffb54e42245904932783f","url":"logo-192.png"},{"revision":"208031b296f4c82b6b60c0c128871b90","url":"logo-512.png"},{"revision":"0e54fb2e2fb47e455a51b4ac4cfb0962","url":"manifest.json"}]);

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'qa-cache',
    precache: 'precache',
    runtime: 'runtime',
  });
  
// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: 'cache-stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);
// 2. images
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'cache-images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, //cache for one week
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

// 3. html
workbox.routing.registerRoute(
    new RegExp('\.html$'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cache-html',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 7 //cache for one week
        }
    })
);

// 4. json
workbox.routing.registerRoute(
    new RegExp('\.json$'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cache-json',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 1 //cache for one day
        }
    })
);