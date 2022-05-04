importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"eee6df65b4c5f2e1daf6e3441cbe119d","url":"assets/css/0.styles.fd6aa399.css"},{"revision":"42f87b2ee2752979dfcd6ab813b9dbc5","url":"assets/data/404/index.json"},{"revision":"e576d14036a7de27487b773485cd4933","url":"assets/data/AlexaBeach/index.json"},{"revision":"4caa03b9ac279466a115408a822dd87d","url":"assets/data/AlyBrine/index.json"},{"revision":"7d30f2806fda34b7e425cd4a2537152d","url":"assets/data/AmandaPerkins/index.json"},{"revision":"fa658092706f918f52eb8776f45a4176","url":"assets/data/AndrewKnight/index.json"},{"revision":"6f666895e6a57e51c21a6f011a07168c","url":"assets/data/AndyWarns/index.json"},{"revision":"e7f84ce7e240011c5ad6c08b0306a846","url":"assets/data/AngieJones/index.json"},{"revision":"83b81416c909e3b22e255e7dc1b3ce20","url":"assets/data/BenOconis/index.json"},{"revision":"c5e493516a84e5afed9d66146f30b440","url":"assets/data/CarlosKidman/index.json"},{"revision":"8ab65742ed2901229c12777784dab45e","url":"assets/data/DamianSynadinos/index.json"},{"revision":"dfe0ae1e4f7f38ecc119f8c9ac2799ae","url":"assets/data/DarrelFarris/index.json"},{"revision":"002f0f80d7a8324ea8b1640aad421d58","url":"assets/data/EranKinsbruner/index.json"},{"revision":"11652db7db207cc8a0ef4449017bf3b9","url":"assets/data/index.json"},{"revision":"e5cca7269c81ba37eca742bceb7f3cb5","url":"assets/data/JacobHaning/index.json"},{"revision":"ef048974d7f345116762defb7d240796","url":"assets/data/JamieKelley/index.json"},{"revision":"5e1e1bcaec000f3261dfa001df3f067b","url":"assets/data/JeffSing/index.json"},{"revision":"c786ed0fbe7017a22e70a293fe743f03","url":"assets/data/JennaCharlton/index.json"},{"revision":"ed750305dc196336023157804527711b","url":"assets/data/JoelMontvelisky/index.json"},{"revision":"fd9068a88c8a48e783048a599c5c1685","url":"assets/data/JustinHunter/index.json"},{"revision":"e66a4927cb547a217fecd36339d83e2f","url":"assets/data/LeandroMelendez/index.json"},{"revision":"f3684f5e5e34d231c202405f5c9b404b","url":"assets/data/LeeBarnes/index.json"},{"revision":"6ae539e705d2d3ec95abda6bf12df65c","url":"assets/data/MageshChandran/index.json"},{"revision":"80f020373349712affd65d35984ca510","url":"assets/data/MalaPunyani/index.json"},{"revision":"085e27e06a1a4c6b6a1bcb36499112c5","url":"assets/data/MatthewEakin/index.json"},{"revision":"f19c78d834d83965b83036d56704d5ae","url":"assets/data/MelissaTondi/index.json"},{"revision":"11808158e51ccd5b3cafff39d32d9c4d","url":"assets/data/MohitaPrasad/index.json"},{"revision":"a0cb1e0141c15d9f15a3589a84e6a5d1","url":"assets/data/PetrosPlakogiannis/index.json"},{"revision":"5ecdead2312edb9478b21e427de1a6b1","url":"assets/data/RobertFornal/index.json"},{"revision":"6caac560d1e959eba9d7a1897c1bc8c7","url":"assets/data/ShyamSunder/index.json"},{"revision":"ecadeed53c1d461036a115f6b2a13060","url":"assets/data/StacyWyatt/index.json"},{"revision":"6cb9b71a7b2723ef8dad2239daabe817","url":"assets/data/ThomasHaver/index.json"},{"revision":"110583e3aa55f3b2b0b59bb3d3699a0a","url":"assets/data/TitusFortner/index.json"},{"revision":"d9cfd79e017d2585858e2e3522efebd5","url":"assets/img/alexa beach.d9cfd79e.webp"},{"revision":"ecd267a7749713ed9a3bc4aa651ebfae","url":"assets/img/aly brine.ecd267a7.webp"},{"revision":"b991fcb376400761a08c22477a1c5523","url":"assets/img/andrew knight.b991fcb3.webp"},{"revision":"9e04b8033ee7519f5586233bb1216f7c","url":"assets/img/andy warns.9e04b803.webp"},{"revision":"ee9a40d78a4ac767e2aa4e6ab75d6be3","url":"assets/img/angie jones.ee9a40d7.webp"},{"revision":"542d556d133e6914c4caff7838bbcc2f","url":"assets/img/ben oconis.542d556d.webp"},{"revision":"2bc6e9b27dc0924b2b1ba181823c008c","url":"assets/img/carlos kidman.2bc6e9b2.webp"},{"revision":"3657007491bce650ad011a7ee07df08b","url":"assets/img/cartoonroom.36570074.png"},{"revision":"76d3eefced571f14225daae2f1be34fa","url":"assets/img/damian synadinos.76d3eefc.webp"},{"revision":"fe9937c427d8e3a7940cd8c9ded44905","url":"assets/img/darrel farris.fe9937c4.webp"},{"revision":"ad26e48a3782ea95fc3a221a86e2f05c","url":"assets/img/eastballroom.ad26e48a.png"},{"revision":"3e12aa9b89c300f5c6f6e226a4c36bba","url":"assets/img/eran kinsbruner.3e12aa9b.webp"},{"revision":"fb2c2b3c5a13daad62ffe053d8777cef","url":"assets/img/generic-profile.fb2c2b3c.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall12.20afd1a9.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall3.20afd1a9.png"},{"revision":"2da60d2127424f4ef413509e4f2fea19","url":"assets/img/interfaithroom.2da60d21.png"},{"revision":"99a6752b7082dc5d6dc654f4677fff63","url":"assets/img/jacob haning.99a6752b.webp"},{"revision":"7817176bd214990a1bc72ecc1957425f","url":"assets/img/jamie kelley.7817176b.webp"},{"revision":"c48b81ceba055ba2f62e1b722a928d6a","url":"assets/img/jeff sing.c48b81ce.webp"},{"revision":"f85744f5512faf1becbd52c23c398175","url":"assets/img/jenna charlton.f85744f5.webp"},{"revision":"901bf5239d447401e6d0175192ae8cbe","url":"assets/img/jerren every.901bf523.webp"},{"revision":"54dff9dd2f761f8b931d32e3f914d808","url":"assets/img/joel montvelisky.54dff9dd.webp"},{"revision":"24c5f269b789f598ec8d25f3485f38b1","url":"assets/img/leandro melendez.24c5f269.webp"},{"revision":"f3aa77319cac7c0ae697ce69681dba23","url":"assets/img/lee barnes.f3aa7731.webp"},{"revision":"f1be2743579f552a5b5fa03d543dd6d0","url":"assets/img/mala punyani.f1be2743.webp"},{"revision":"b85dc285eda9e340ff1a753ecc082211","url":"assets/img/melissa tondi.b85dc285.webp"},{"revision":"7205ac706cbbadfc536aa1b0755a0b4b","url":"assets/img/mohita prasad.7205ac70.webp"},{"revision":"11019bb638eee2b03c5f20206dcdf749","url":"assets/img/petros plakogiannis.11019bb6.webp"},{"revision":"a6598449f850f97af831b3d6741c417e","url":"assets/img/robert fornal.a6598449.webp"},{"revision":"fdbab44df63ad36b031444c290be8dbc","url":"assets/img/stacy wyatt.fdbab44d.webp"},{"revision":"f68b18deef878cf92bccf40c79e7be8f","url":"assets/img/studentalumniroom.f68b18de.png"},{"revision":"a939ecb91e885b9cfa5725aef3d4e54c","url":"assets/img/titus fortner.a939ecb9.webp"},{"revision":"6f11ca8a68a77381697ab4da77f0333f","url":"assets/img/westballroom.6f11ca8a.png"},{"revision":"b4e1c6a77e0c2db7b3f6ccd1c9178a23","url":"assets/js/app.03e978ea.js"},{"revision":"4938d31e47942185ca847e5cf6dd2eed","url":"assets/js/page--src--pages--404-vue.6ad48137.js"},{"revision":"eb4c2d4ad575013ac76691f3dfd2cb91","url":"assets/js/page--src--pages--index-vue.b9ae38c0.js"},{"revision":"91d49aa8acd06e1521e8b95a2a640aa1","url":"assets/js/page--src--templates--session-vue.bfc9b146.js"},{"revision":"14abed9ce0e092b924639ca0ffd03b62","url":"assets/static/favicon.1539b60.af23d950429ffb54e42245904932783f.png"},{"revision":"b30ee95be125d7dff57231f889ac7c3e","url":"assets/static/favicon.62d22cb.af23d950429ffb54e42245904932783f.png"},{"revision":"0ab2d751cb5628b9c426d0af9dd5497f","url":"assets/static/favicon.7b22250.af23d950429ffb54e42245904932783f.png"},{"revision":"af49ef7347f7b4eec089a8c8f25fbd65","url":"assets/static/favicon.ac8d93a.af23d950429ffb54e42245904932783f.png"},{"revision":"dfc344bbd6ac9f6969c7b87c9068e30a","url":"assets/static/favicon.b9532cc.af23d950429ffb54e42245904932783f.png"},{"revision":"1eac566b8bcb4dde804bf8902c5939c7","url":"assets/static/favicon.ce0531f.af23d950429ffb54e42245904932783f.png"},{"revision":"7932a6488b5327c3f5b37153d4f97aa1","url":"assets/static/favicon.dc0cdc5.af23d950429ffb54e42245904932783f.png"},{"revision":"9383235b27041f682d1e6ef3fb21f393","url":"assets/static/favicon.f22e9f3.af23d950429ffb54e42245904932783f.png"},{"revision":"be7d17475fd16d4203ff0d026dbd3078","url":"data.json"},{"revision":"af23d950429ffb54e42245904932783f","url":"logo-192.png"},{"revision":"208031b296f4c82b6b60c0c128871b90","url":"logo-512.png"},{"revision":"cb2dffe13d4fe4384b744b5c99edcca6","url":"manifest.json"}]);

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