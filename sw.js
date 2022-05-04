importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"d5b3c3a1ea616a572256870f71acf835","url":"assets/css/0.styles.14b2fa78.css"},{"revision":"a903f4bfe820f2ecc9c42f2d7b544b5a","url":"assets/data/404/index.json"},{"revision":"dd467f20c219d508e9afda81087829b2","url":"assets/data/AlexaBeach/index.json"},{"revision":"66dfe69705f58cffef701da73d79b59d","url":"assets/data/AlyBrine/index.json"},{"revision":"7494297b6b09e6ab112248392fba645e","url":"assets/data/AmandaPerkins/index.json"},{"revision":"4ca81359faed2ea7ea14d8b27f47040e","url":"assets/data/AndrewKnight/index.json"},{"revision":"51624b73b6126379581240b56fe9fe75","url":"assets/data/AndyWarns/index.json"},{"revision":"af406c13f1525f9d01838f99ba2a0af0","url":"assets/data/AngieJones/index.json"},{"revision":"0b11db20d019d19d2f7466f3a854b5ba","url":"assets/data/BenOconis/index.json"},{"revision":"82b8215b363f7a4a85fa43852588d2ff","url":"assets/data/CarlosKidman/index.json"},{"revision":"728de8aa1074a899f5f2fb070110ef05","url":"assets/data/DamianSynadinos/index.json"},{"revision":"5cc365feac1061e095db3f4c8d813fbe","url":"assets/data/DarrelFarris/index.json"},{"revision":"6df210cce162800264b270c64469a151","url":"assets/data/EranKinsbruner/index.json"},{"revision":"0666a7e3924962cc074f70d5deaed35c","url":"assets/data/index.json"},{"revision":"2c8b12c0adf8128f9cc93cb8e12f7764","url":"assets/data/JacobHaning/index.json"},{"revision":"bc1ed6b77bf05af0edfece647d1f62d1","url":"assets/data/JamieKelley/index.json"},{"revision":"fa811a2cf210a1a25f119a5e05df4178","url":"assets/data/JeffSing/index.json"},{"revision":"87a102c2070b8aafd7694db13ce27a4c","url":"assets/data/JennaCharlton/index.json"},{"revision":"6924798a07b33a0fcf15bf7940269b31","url":"assets/data/JoelMontvelisky/index.json"},{"revision":"82e1e99d408070f52f710aa2cb62ecc8","url":"assets/data/JustinHunter/index.json"},{"revision":"c5f801cd6fa8e7f0ec44fcf892f33590","url":"assets/data/LeandroMelendez/index.json"},{"revision":"ddda988af6a39a8caae806837b45d539","url":"assets/data/LeeBarnes/index.json"},{"revision":"beb9c430ecf35c660c078dfc5cd62e3e","url":"assets/data/MageshChandran/index.json"},{"revision":"7f9efa80169a95e5e40d6fac92bb405f","url":"assets/data/MalaPunyani/index.json"},{"revision":"1671a41654fbed189b6da8e370fca718","url":"assets/data/MatthewEakin/index.json"},{"revision":"5428409f6afe7de1f8421b2565440bd3","url":"assets/data/MelissaTondi/index.json"},{"revision":"98c49ff866a0f17cb996d20bcdeb2381","url":"assets/data/MohitaPrasad/index.json"},{"revision":"6fedbe2dad46bd205e5f863f7f7fda5f","url":"assets/data/PetrosPlakogiannis/index.json"},{"revision":"3488a50029dc9386d3631c2eba9394fd","url":"assets/data/RobertFornal/index.json"},{"revision":"317826b35f60d5a34d09a97df5331b5c","url":"assets/data/ShyamSunder/index.json"},{"revision":"bda99029abb61f916f351c9210c4aa5d","url":"assets/data/StacyWyatt/index.json"},{"revision":"d3ad4cb4c784a75ad35ac2f4f38f09dd","url":"assets/data/ThomasHaver/index.json"},{"revision":"8094dcfc6943cbd1080ae27c01cbb2cb","url":"assets/data/TitusFortner/index.json"},{"revision":"d9cfd79e017d2585858e2e3522efebd5","url":"assets/img/alexa beach.d9cfd79e.webp"},{"revision":"ecd267a7749713ed9a3bc4aa651ebfae","url":"assets/img/aly brine.ecd267a7.webp"},{"revision":"b991fcb376400761a08c22477a1c5523","url":"assets/img/andrew knight.b991fcb3.webp"},{"revision":"9e04b8033ee7519f5586233bb1216f7c","url":"assets/img/andy warns.9e04b803.webp"},{"revision":"ee9a40d78a4ac767e2aa4e6ab75d6be3","url":"assets/img/angie jones.ee9a40d7.webp"},{"revision":"542d556d133e6914c4caff7838bbcc2f","url":"assets/img/ben oconis.542d556d.webp"},{"revision":"2bc6e9b27dc0924b2b1ba181823c008c","url":"assets/img/carlos kidman.2bc6e9b2.webp"},{"revision":"3657007491bce650ad011a7ee07df08b","url":"assets/img/cartoonroom.36570074.png"},{"revision":"76d3eefced571f14225daae2f1be34fa","url":"assets/img/damian synadinos.76d3eefc.webp"},{"revision":"fe9937c427d8e3a7940cd8c9ded44905","url":"assets/img/darrel farris.fe9937c4.webp"},{"revision":"ad26e48a3782ea95fc3a221a86e2f05c","url":"assets/img/eastballroom.ad26e48a.png"},{"revision":"3e12aa9b89c300f5c6f6e226a4c36bba","url":"assets/img/eran kinsbruner.3e12aa9b.webp"},{"revision":"fb2c2b3c5a13daad62ffe053d8777cef","url":"assets/img/generic-profile.fb2c2b3c.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall12.20afd1a9.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall3.20afd1a9.png"},{"revision":"2da60d2127424f4ef413509e4f2fea19","url":"assets/img/interfaithroom.2da60d21.png"},{"revision":"99a6752b7082dc5d6dc654f4677fff63","url":"assets/img/jacob haning.99a6752b.webp"},{"revision":"7817176bd214990a1bc72ecc1957425f","url":"assets/img/jamie kelley.7817176b.webp"},{"revision":"c48b81ceba055ba2f62e1b722a928d6a","url":"assets/img/jeff sing.c48b81ce.webp"},{"revision":"f85744f5512faf1becbd52c23c398175","url":"assets/img/jenna charlton.f85744f5.webp"},{"revision":"901bf5239d447401e6d0175192ae8cbe","url":"assets/img/jerren every.901bf523.webp"},{"revision":"54dff9dd2f761f8b931d32e3f914d808","url":"assets/img/joel montvelisky.54dff9dd.webp"},{"revision":"24c5f269b789f598ec8d25f3485f38b1","url":"assets/img/leandro melendez.24c5f269.webp"},{"revision":"f3aa77319cac7c0ae697ce69681dba23","url":"assets/img/lee barnes.f3aa7731.webp"},{"revision":"f1be2743579f552a5b5fa03d543dd6d0","url":"assets/img/mala punyani.f1be2743.webp"},{"revision":"b85dc285eda9e340ff1a753ecc082211","url":"assets/img/melissa tondi.b85dc285.webp"},{"revision":"7205ac706cbbadfc536aa1b0755a0b4b","url":"assets/img/mohita prasad.7205ac70.webp"},{"revision":"11019bb638eee2b03c5f20206dcdf749","url":"assets/img/petros plakogiannis.11019bb6.webp"},{"revision":"a6598449f850f97af831b3d6741c417e","url":"assets/img/robert fornal.a6598449.webp"},{"revision":"fdbab44df63ad36b031444c290be8dbc","url":"assets/img/stacy wyatt.fdbab44d.webp"},{"revision":"f68b18deef878cf92bccf40c79e7be8f","url":"assets/img/studentalumniroom.f68b18de.png"},{"revision":"a939ecb91e885b9cfa5725aef3d4e54c","url":"assets/img/titus fortner.a939ecb9.webp"},{"revision":"6f11ca8a68a77381697ab4da77f0333f","url":"assets/img/westballroom.6f11ca8a.png"},{"revision":"90ec3b8533ac2fd60b65cef6aab9bb1a","url":"assets/js/app.363213e7.js"},{"revision":"4938d31e47942185ca847e5cf6dd2eed","url":"assets/js/page--src--pages--404-vue.6ad48137.js"},{"revision":"efb648e9ecf35d92672a8acff93137ef","url":"assets/js/page--src--pages--index-vue.fc563924.js"},{"revision":"3e0098d670e354450b3bb018c669243c","url":"assets/js/page--src--templates--session-vue.accc4867.js"},{"revision":"14abed9ce0e092b924639ca0ffd03b62","url":"assets/static/favicon.1539b60.af23d950429ffb54e42245904932783f.png"},{"revision":"b30ee95be125d7dff57231f889ac7c3e","url":"assets/static/favicon.62d22cb.af23d950429ffb54e42245904932783f.png"},{"revision":"0ab2d751cb5628b9c426d0af9dd5497f","url":"assets/static/favicon.7b22250.af23d950429ffb54e42245904932783f.png"},{"revision":"af49ef7347f7b4eec089a8c8f25fbd65","url":"assets/static/favicon.ac8d93a.af23d950429ffb54e42245904932783f.png"},{"revision":"dfc344bbd6ac9f6969c7b87c9068e30a","url":"assets/static/favicon.b9532cc.af23d950429ffb54e42245904932783f.png"},{"revision":"1eac566b8bcb4dde804bf8902c5939c7","url":"assets/static/favicon.ce0531f.af23d950429ffb54e42245904932783f.png"},{"revision":"7932a6488b5327c3f5b37153d4f97aa1","url":"assets/static/favicon.dc0cdc5.af23d950429ffb54e42245904932783f.png"},{"revision":"9383235b27041f682d1e6ef3fb21f393","url":"assets/static/favicon.f22e9f3.af23d950429ffb54e42245904932783f.png"},{"revision":"be7d17475fd16d4203ff0d026dbd3078","url":"data.json"},{"revision":"af23d950429ffb54e42245904932783f","url":"logo-192.png"},{"revision":"208031b296f4c82b6b60c0c128871b90","url":"logo-512.png"},{"revision":"cb2dffe13d4fe4384b744b5c99edcca6","url":"manifest.json"}]);

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
    new workbox.strategies.CacheFirst({
        cacheName: 'cache-stylesheets',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
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
    new workbox.strategies.CacheFirst({
        cacheName: 'cache-images',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
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
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'cache-html',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 7 //cache for one week
        }
    })
);

// 4. json
workbox.routing.registerRoute(
    new RegExp('\.json$'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'cache-json',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 1 //cache for one day
        }
    })
);