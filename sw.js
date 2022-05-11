importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"0ca90bc2c6f8bb83960aaf5880dcdfd6","url":"assets/css/0.styles.6a75fafe.css"},{"revision":"e5af48daa827ad0406a6d8304d61d438","url":"assets/data/404/index.json"},{"revision":"02189143ccd5bd8d3e774fd63fcb8875","url":"assets/data/AlexaBeach/index.json"},{"revision":"d2377df633a6a84fcf2613dc6a73147c","url":"assets/data/AlyBrine/index.json"},{"revision":"d7d1c738b1ac25421772d354a905f5b0","url":"assets/data/AmandaPerkins/index.json"},{"revision":"b624a075323e414696a129378b04f0cb","url":"assets/data/AndrewKnight/index.json"},{"revision":"6b10a0b6462ac07935c7e82e5edbbf14","url":"assets/data/AndyWarns/index.json"},{"revision":"ba16c60db50861f067a32ad808fddf5e","url":"assets/data/AngieJones/index.json"},{"revision":"40a657a835b557211a7ee614cc70641b","url":"assets/data/BenOconis/index.json"},{"revision":"3a7b7c8b242c35b5731b3d095dfb6049","url":"assets/data/CarlosKidman/index.json"},{"revision":"d5f6320af174e95a28ece04c116bf93c","url":"assets/data/DamianSynadinos/index.json"},{"revision":"d6bedc516eadbfc0db2b0eafa7f3cad5","url":"assets/data/DarrelFarris/index.json"},{"revision":"89c85334c2f5b9d611d0e7851cdf4a84","url":"assets/data/EranKinsbruner/index.json"},{"revision":"c9ac31b8dabac58e08aeb7b7b34f8504","url":"assets/data/HiteshPatel/index.json"},{"revision":"6765a7ef1f7c09077f29b3695b7b6719","url":"assets/data/index.json"},{"revision":"bf1b861f35831d2ca8c446d33c389721","url":"assets/data/JacobHaning/index.json"},{"revision":"3c177f304a73026a9766efaf6a81b62c","url":"assets/data/JamieKelley/index.json"},{"revision":"db774562f1c06783c96e21eb12ce27bb","url":"assets/data/JeffSing/index.json"},{"revision":"f8e8a1669d5e2194d05a0919240f510b","url":"assets/data/JennaCharlton/index.json"},{"revision":"62649372ab0486978b41fdf8cb9c279d","url":"assets/data/JoelMontvelisky/index.json"},{"revision":"3ec4a4b0b373969f1a0e58788982edd6","url":"assets/data/JustinHunter/index.json"},{"revision":"d5df3b07c87e4bc31f737aa42471e702","url":"assets/data/LeandroMelendez/index.json"},{"revision":"4a1a842e8aaa8c186ade271f7bdeda0e","url":"assets/data/LeeBarnes/index.json"},{"revision":"a43575d4be8d17a233e10655f184e64e","url":"assets/data/MageshChandran/index.json"},{"revision":"fb316afe585e96d585f7bc3125fd873d","url":"assets/data/MatthewEakin/index.json"},{"revision":"91b9e72538dafae0fda38bf3304911e2","url":"assets/data/MelissaTondi/index.json"},{"revision":"c3b9252d87d872bd95744d7199c71a8a","url":"assets/data/MohitaPrasad/index.json"},{"revision":"6c22f41bde81e204fd50f857a60cd518","url":"assets/data/PetrosPlakogiannis/index.json"},{"revision":"9cc8aacc3a1ff218e4ddcf8f9178c546","url":"assets/data/RobertFornal/index.json"},{"revision":"291497940525805a6eb5c5d21026c8c3","url":"assets/data/SaralaPandey/index.json"},{"revision":"3830e2b62a06bdc8477578b397d96e27","url":"assets/data/ShyamSunder/index.json"},{"revision":"e8846e7e913283e9d022697bed32c38b","url":"assets/data/StacyWyatt/index.json"},{"revision":"0fe96837058b32ba3c2aafa015261259","url":"assets/data/ThomasHaver/index.json"},{"revision":"ee0eac79404cdc866de027c427ab60e5","url":"assets/data/TitusFortner/index.json"},{"revision":"d9cfd79e017d2585858e2e3522efebd5","url":"assets/img/alexa beach.d9cfd79e.webp"},{"revision":"ecd267a7749713ed9a3bc4aa651ebfae","url":"assets/img/aly brine.ecd267a7.webp"},{"revision":"b991fcb376400761a08c22477a1c5523","url":"assets/img/andrew knight.b991fcb3.webp"},{"revision":"9e04b8033ee7519f5586233bb1216f7c","url":"assets/img/andy warns.9e04b803.webp"},{"revision":"ee9a40d78a4ac767e2aa4e6ab75d6be3","url":"assets/img/angie jones.ee9a40d7.webp"},{"revision":"542d556d133e6914c4caff7838bbcc2f","url":"assets/img/ben oconis.542d556d.webp"},{"revision":"2bc6e9b27dc0924b2b1ba181823c008c","url":"assets/img/carlos kidman.2bc6e9b2.webp"},{"revision":"3657007491bce650ad011a7ee07df08b","url":"assets/img/cartoonroom.36570074.png"},{"revision":"76d3eefced571f14225daae2f1be34fa","url":"assets/img/damian synadinos.76d3eefc.webp"},{"revision":"fe9937c427d8e3a7940cd8c9ded44905","url":"assets/img/darrel farris.fe9937c4.webp"},{"revision":"ad26e48a3782ea95fc3a221a86e2f05c","url":"assets/img/eastballroom.ad26e48a.png"},{"revision":"3e12aa9b89c300f5c6f6e226a4c36bba","url":"assets/img/eran kinsbruner.3e12aa9b.webp"},{"revision":"fb2c2b3c5a13daad62ffe053d8777cef","url":"assets/img/generic-profile.fb2c2b3c.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall12.20afd1a9.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall3.20afd1a9.png"},{"revision":"2da60d2127424f4ef413509e4f2fea19","url":"assets/img/interfaithroom.2da60d21.png"},{"revision":"99a6752b7082dc5d6dc654f4677fff63","url":"assets/img/jacob haning.99a6752b.webp"},{"revision":"02a6f6b5bba01ae80681a45f7212304d","url":"assets/img/james otworth.02a6f6b5.webp"},{"revision":"7817176bd214990a1bc72ecc1957425f","url":"assets/img/jamie kelley.7817176b.webp"},{"revision":"c48b81ceba055ba2f62e1b722a928d6a","url":"assets/img/jeff sing.c48b81ce.webp"},{"revision":"f85744f5512faf1becbd52c23c398175","url":"assets/img/jenna charlton.f85744f5.webp"},{"revision":"901bf5239d447401e6d0175192ae8cbe","url":"assets/img/jerren every.901bf523.webp"},{"revision":"54dff9dd2f761f8b931d32e3f914d808","url":"assets/img/joel montvelisky.54dff9dd.webp"},{"revision":"24c5f269b789f598ec8d25f3485f38b1","url":"assets/img/leandro melendez.24c5f269.webp"},{"revision":"f3aa77319cac7c0ae697ce69681dba23","url":"assets/img/lee barnes.f3aa7731.webp"},{"revision":"f1be2743579f552a5b5fa03d543dd6d0","url":"assets/img/mala punyani.f1be2743.webp"},{"revision":"b85dc285eda9e340ff1a753ecc082211","url":"assets/img/melissa tondi.b85dc285.webp"},{"revision":"7205ac706cbbadfc536aa1b0755a0b4b","url":"assets/img/mohita prasad.7205ac70.webp"},{"revision":"11019bb638eee2b03c5f20206dcdf749","url":"assets/img/petros plakogiannis.11019bb6.webp"},{"revision":"a6598449f850f97af831b3d6741c417e","url":"assets/img/robert fornal.a6598449.webp"},{"revision":"fdbab44df63ad36b031444c290be8dbc","url":"assets/img/stacy wyatt.fdbab44d.webp"},{"revision":"f68b18deef878cf92bccf40c79e7be8f","url":"assets/img/studentalumniroom.f68b18de.png"},{"revision":"a939ecb91e885b9cfa5725aef3d4e54c","url":"assets/img/titus fortner.a939ecb9.webp"},{"revision":"6f11ca8a68a77381697ab4da77f0333f","url":"assets/img/westballroom.6f11ca8a.png"},{"revision":"da3a2543031637786904285ceace1b2e","url":"assets/js/app.3a0a2102.js"},{"revision":"4938d31e47942185ca847e5cf6dd2eed","url":"assets/js/page--src--pages--404-vue.6ad48137.js"},{"revision":"10e18f9ab18d365e88cdc142cf846c69","url":"assets/js/page--src--pages--index-vue.e85c77c3.js"},{"revision":"aa5d12624b50fd98520f013f2fab0a87","url":"assets/js/page--src--templates--session-vue.b840d705.js"},{"revision":"14abed9ce0e092b924639ca0ffd03b62","url":"assets/static/favicon.1539b60.af23d950429ffb54e42245904932783f.png"},{"revision":"b30ee95be125d7dff57231f889ac7c3e","url":"assets/static/favicon.62d22cb.af23d950429ffb54e42245904932783f.png"},{"revision":"0ab2d751cb5628b9c426d0af9dd5497f","url":"assets/static/favicon.7b22250.af23d950429ffb54e42245904932783f.png"},{"revision":"af49ef7347f7b4eec089a8c8f25fbd65","url":"assets/static/favicon.ac8d93a.af23d950429ffb54e42245904932783f.png"},{"revision":"dfc344bbd6ac9f6969c7b87c9068e30a","url":"assets/static/favicon.b9532cc.af23d950429ffb54e42245904932783f.png"},{"revision":"1eac566b8bcb4dde804bf8902c5939c7","url":"assets/static/favicon.ce0531f.af23d950429ffb54e42245904932783f.png"},{"revision":"7932a6488b5327c3f5b37153d4f97aa1","url":"assets/static/favicon.dc0cdc5.af23d950429ffb54e42245904932783f.png"},{"revision":"9383235b27041f682d1e6ef3fb21f393","url":"assets/static/favicon.f22e9f3.af23d950429ffb54e42245904932783f.png"},{"revision":"aff40359905438b1a7ad8e2bbbcf7c75","url":"data.json"},{"revision":"af23d950429ffb54e42245904932783f","url":"logo-192.png"},{"revision":"208031b296f4c82b6b60c0c128871b90","url":"logo-512.png"},{"revision":"cb2dffe13d4fe4384b744b5c99edcca6","url":"manifest.json"}]);

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