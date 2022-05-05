importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"eee6df65b4c5f2e1daf6e3441cbe119d","url":"assets/css/0.styles.fd6aa399.css"},{"revision":"ad3eba498b499a8e384e669d0caea620","url":"assets/data/404/index.json"},{"revision":"dd8b7e25141e3e3c7244416e0e4738d0","url":"assets/data/AlexaBeach/index.json"},{"revision":"798ede76775fb03cb80d2200d6462c21","url":"assets/data/AlyBrine/index.json"},{"revision":"fd8fada1e434c0e64b16dbc8ea578d82","url":"assets/data/AmandaPerkins/index.json"},{"revision":"8e47c7ccd2d510f6a11dc20160c7d10c","url":"assets/data/AndrewKnight/index.json"},{"revision":"879c29dc0062f123039e9675bc22dddb","url":"assets/data/AndyWarns/index.json"},{"revision":"9cb2fe8e7e1c0ace76f32a750b715868","url":"assets/data/AngieJones/index.json"},{"revision":"beaf83c5db755d0d7400c0c394eb2522","url":"assets/data/BenOconis/index.json"},{"revision":"2f2db4e9d972c513aaeb2b26fe1ff766","url":"assets/data/CarlosKidman/index.json"},{"revision":"b5e2a40ba9622b96107c77759f4395e8","url":"assets/data/DamianSynadinos/index.json"},{"revision":"0766c67041857fabec802f463b6b0f9e","url":"assets/data/DarrelFarris/index.json"},{"revision":"6c671b0b9cc3d5e33f5a90365425b45c","url":"assets/data/EranKinsbruner/index.json"},{"revision":"5ac292efcab8f24f8ee4b2f9efbecfcf","url":"assets/data/HiteshPatel/index.json"},{"revision":"8969fb525e9921b14238f6270d87bc44","url":"assets/data/index.json"},{"revision":"d793a2255510e36a916442af7b1d75ea","url":"assets/data/JacobHaning/index.json"},{"revision":"9916c1609ee22f4d559c5f47600fbeaf","url":"assets/data/JamieKelley/index.json"},{"revision":"5e54d397a831889b6c4055a55ea5b0fd","url":"assets/data/JeffSing/index.json"},{"revision":"28cdc8cfabe1534ec849a29199ab596d","url":"assets/data/JennaCharlton/index.json"},{"revision":"64298013c996a771acbdd93364f4c7d9","url":"assets/data/JoelMontvelisky/index.json"},{"revision":"f9e260c076c0ce3a9920829f394aafed","url":"assets/data/JustinHunter/index.json"},{"revision":"746c5d1a9b148bb3daac26c5bfd9336f","url":"assets/data/LeandroMelendez/index.json"},{"revision":"f9185645c3f929466ac04a8237d1d2b1","url":"assets/data/LeeBarnes/index.json"},{"revision":"348e98097d3d4d09fd70abcf3994d059","url":"assets/data/MageshChandran/index.json"},{"revision":"1523c1428b4840ea50a1ae87052753c2","url":"assets/data/MalaPunyani/index.json"},{"revision":"008c8342579b84dc66d90b51e40483a2","url":"assets/data/MatthewEakin/index.json"},{"revision":"2f084ea443e5889a24253483a0f0ca54","url":"assets/data/MelissaTondi/index.json"},{"revision":"2eec070941c4fb858f570694181bbc6a","url":"assets/data/MohitaPrasad/index.json"},{"revision":"cace707036691b588525875f7d20ea51","url":"assets/data/PetrosPlakogiannis/index.json"},{"revision":"f18922650a71f0e7283a2961b4baa89b","url":"assets/data/RobertFornal/index.json"},{"revision":"0d2f4b75add2d031e834ba0f84ef9772","url":"assets/data/ShyamSunder/index.json"},{"revision":"9f9721ecdc8d8f5c2dbc00dffd6341c0","url":"assets/data/StacyWyatt/index.json"},{"revision":"638864695df7f54fa7ac8b9931e7c02b","url":"assets/data/ThomasHaver/index.json"},{"revision":"8bf9557b2023d9929c92e6ebef04fb26","url":"assets/data/TitusFortner/index.json"},{"revision":"d9cfd79e017d2585858e2e3522efebd5","url":"assets/img/alexa beach.d9cfd79e.webp"},{"revision":"ecd267a7749713ed9a3bc4aa651ebfae","url":"assets/img/aly brine.ecd267a7.webp"},{"revision":"b991fcb376400761a08c22477a1c5523","url":"assets/img/andrew knight.b991fcb3.webp"},{"revision":"9e04b8033ee7519f5586233bb1216f7c","url":"assets/img/andy warns.9e04b803.webp"},{"revision":"ee9a40d78a4ac767e2aa4e6ab75d6be3","url":"assets/img/angie jones.ee9a40d7.webp"},{"revision":"542d556d133e6914c4caff7838bbcc2f","url":"assets/img/ben oconis.542d556d.webp"},{"revision":"2bc6e9b27dc0924b2b1ba181823c008c","url":"assets/img/carlos kidman.2bc6e9b2.webp"},{"revision":"3657007491bce650ad011a7ee07df08b","url":"assets/img/cartoonroom.36570074.png"},{"revision":"76d3eefced571f14225daae2f1be34fa","url":"assets/img/damian synadinos.76d3eefc.webp"},{"revision":"fe9937c427d8e3a7940cd8c9ded44905","url":"assets/img/darrel farris.fe9937c4.webp"},{"revision":"ad26e48a3782ea95fc3a221a86e2f05c","url":"assets/img/eastballroom.ad26e48a.png"},{"revision":"3e12aa9b89c300f5c6f6e226a4c36bba","url":"assets/img/eran kinsbruner.3e12aa9b.webp"},{"revision":"fb2c2b3c5a13daad62ffe053d8777cef","url":"assets/img/generic-profile.fb2c2b3c.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall12.20afd1a9.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall3.20afd1a9.png"},{"revision":"2da60d2127424f4ef413509e4f2fea19","url":"assets/img/interfaithroom.2da60d21.png"},{"revision":"99a6752b7082dc5d6dc654f4677fff63","url":"assets/img/jacob haning.99a6752b.webp"},{"revision":"02a6f6b5bba01ae80681a45f7212304d","url":"assets/img/james otworth.02a6f6b5.webp"},{"revision":"7817176bd214990a1bc72ecc1957425f","url":"assets/img/jamie kelley.7817176b.webp"},{"revision":"c48b81ceba055ba2f62e1b722a928d6a","url":"assets/img/jeff sing.c48b81ce.webp"},{"revision":"f85744f5512faf1becbd52c23c398175","url":"assets/img/jenna charlton.f85744f5.webp"},{"revision":"901bf5239d447401e6d0175192ae8cbe","url":"assets/img/jerren every.901bf523.webp"},{"revision":"54dff9dd2f761f8b931d32e3f914d808","url":"assets/img/joel montvelisky.54dff9dd.webp"},{"revision":"24c5f269b789f598ec8d25f3485f38b1","url":"assets/img/leandro melendez.24c5f269.webp"},{"revision":"f3aa77319cac7c0ae697ce69681dba23","url":"assets/img/lee barnes.f3aa7731.webp"},{"revision":"f1be2743579f552a5b5fa03d543dd6d0","url":"assets/img/mala punyani.f1be2743.webp"},{"revision":"b85dc285eda9e340ff1a753ecc082211","url":"assets/img/melissa tondi.b85dc285.webp"},{"revision":"7205ac706cbbadfc536aa1b0755a0b4b","url":"assets/img/mohita prasad.7205ac70.webp"},{"revision":"11019bb638eee2b03c5f20206dcdf749","url":"assets/img/petros plakogiannis.11019bb6.webp"},{"revision":"a6598449f850f97af831b3d6741c417e","url":"assets/img/robert fornal.a6598449.webp"},{"revision":"fdbab44df63ad36b031444c290be8dbc","url":"assets/img/stacy wyatt.fdbab44d.webp"},{"revision":"f68b18deef878cf92bccf40c79e7be8f","url":"assets/img/studentalumniroom.f68b18de.png"},{"revision":"a939ecb91e885b9cfa5725aef3d4e54c","url":"assets/img/titus fortner.a939ecb9.webp"},{"revision":"6f11ca8a68a77381697ab4da77f0333f","url":"assets/img/westballroom.6f11ca8a.png"},{"revision":"5202fef8d977b67887b82b6eb36c9b69","url":"assets/js/app.00fbfd79.js"},{"revision":"4938d31e47942185ca847e5cf6dd2eed","url":"assets/js/page--src--pages--404-vue.6ad48137.js"},{"revision":"7589db44644f691b0892da9143868a3a","url":"assets/js/page--src--pages--index-vue.2228a7a7.js"},{"revision":"8f2f844899852b7f7687d3ba976f1fac","url":"assets/js/page--src--templates--session-vue.abda31ba.js"},{"revision":"14abed9ce0e092b924639ca0ffd03b62","url":"assets/static/favicon.1539b60.af23d950429ffb54e42245904932783f.png"},{"revision":"b30ee95be125d7dff57231f889ac7c3e","url":"assets/static/favicon.62d22cb.af23d950429ffb54e42245904932783f.png"},{"revision":"0ab2d751cb5628b9c426d0af9dd5497f","url":"assets/static/favicon.7b22250.af23d950429ffb54e42245904932783f.png"},{"revision":"af49ef7347f7b4eec089a8c8f25fbd65","url":"assets/static/favicon.ac8d93a.af23d950429ffb54e42245904932783f.png"},{"revision":"dfc344bbd6ac9f6969c7b87c9068e30a","url":"assets/static/favicon.b9532cc.af23d950429ffb54e42245904932783f.png"},{"revision":"1eac566b8bcb4dde804bf8902c5939c7","url":"assets/static/favicon.ce0531f.af23d950429ffb54e42245904932783f.png"},{"revision":"7932a6488b5327c3f5b37153d4f97aa1","url":"assets/static/favicon.dc0cdc5.af23d950429ffb54e42245904932783f.png"},{"revision":"9383235b27041f682d1e6ef3fb21f393","url":"assets/static/favicon.f22e9f3.af23d950429ffb54e42245904932783f.png"},{"revision":"135723cd661e3f4257dfeb165545645a","url":"data.json"},{"revision":"af23d950429ffb54e42245904932783f","url":"logo-192.png"},{"revision":"208031b296f4c82b6b60c0c128871b90","url":"logo-512.png"},{"revision":"cb2dffe13d4fe4384b744b5c99edcca6","url":"manifest.json"}]);

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