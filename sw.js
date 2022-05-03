importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.0/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"564c7c3a509f03d313a9f45dd5217c7c","url":"assets/css/0.styles.34e734ab.css"},{"revision":"37713a3edbc6a4df9304042c0dfe33ce","url":"assets/data/404/index.json"},{"revision":"ba871c1b2d5ca5689b806694eda46412","url":"assets/data/AlexaBeach/index.json"},{"revision":"4e59d293e3716bf8361c4a7eafe68f42","url":"assets/data/AlyBrine/index.json"},{"revision":"f249ea16236681e72fdf9ed7ea169ca2","url":"assets/data/AmandaPerkins/index.json"},{"revision":"4b3fabb56f9eab723a99c8af07f3fd1d","url":"assets/data/AndrewKnight/index.json"},{"revision":"e330a9a74fdeb17e2a627d5a53bb2439","url":"assets/data/AndyWarns/index.json"},{"revision":"7eab72f058098ca1dcfab6d653edff93","url":"assets/data/AngieJones/index.json"},{"revision":"c48e0c29f2802052aabc436141fc9384","url":"assets/data/BenOconis/index.json"},{"revision":"482cceb9ab0c44af0593af94f1ab21b9","url":"assets/data/CarlosKidman/index.json"},{"revision":"1bf3c2ecce76875d04e70a531c5fe973","url":"assets/data/DamianSynadinos/index.json"},{"revision":"ece602a78c4b1e5669c7d865c8233458","url":"assets/data/DarrelFarris/index.json"},{"revision":"1372d8764f4b300ed75f2b210678dbcb","url":"assets/data/EranKinsbruner/index.json"},{"revision":"128a716c61f9026d093bf0d6299d9e72","url":"assets/data/index.json"},{"revision":"6fb0598589c4ecc17ca406d45057107e","url":"assets/data/JacobHaning/index.json"},{"revision":"4d835592e393e0a5666bb78024faefcb","url":"assets/data/JamieKelley/index.json"},{"revision":"117669ffd0ae7803de27b1209469d360","url":"assets/data/JeffSing/index.json"},{"revision":"8722164519899c4b0840f590da3c49f6","url":"assets/data/JennaCharlton/index.json"},{"revision":"312416e6c7f0167251199520b6075a05","url":"assets/data/JerrenEvery/index.json"},{"revision":"49c69229df011bdcfa9a22636412ac51","url":"assets/data/JoelMontvelisky/index.json"},{"revision":"86e83e5af503756d80ac22eb9e6a4b99","url":"assets/data/JustinHunter/index.json"},{"revision":"cdacad97c99cfbc4c999a39f6e6c8afb","url":"assets/data/LeandroMelendez/index.json"},{"revision":"cfef040975dd2875831317bc0a8148c4","url":"assets/data/LeeBarnes/index.json"},{"revision":"4b4268b5d6b6877b4e71b98a46815a21","url":"assets/data/MalaPunyani/index.json"},{"revision":"efc35effe667420cf3beeb52031aa0e9","url":"assets/data/MatthewEakin/index.json"},{"revision":"312709bbbd92516cf3a3ab350258e274","url":"assets/data/MelissaTondi/index.json"},{"revision":"81bea90955ab2ccf6e7d6e087583d930","url":"assets/data/MohitaPrasad/index.json"},{"revision":"f59208bb656a34ce52b8db81c8148983","url":"assets/data/PetrosPlakogiannis/index.json"},{"revision":"0a27d4fcdc1f9c68d391bb2c65d67cb3","url":"assets/data/RobertFornal/index.json"},{"revision":"1e0b32f8c273c047306482e306729137","url":"assets/data/ShyamSunder/index.json"},{"revision":"f066b2e1e01716708a62b2c22a99a5f9","url":"assets/data/StacyWyatt/index.json"},{"revision":"3e90fc681c320481ab85c5550fb2653e","url":"assets/data/ThomasHaver/index.json"},{"revision":"68d9faa23b708f85d2b42aecd61594d4","url":"assets/data/TitusFortner/index.json"},{"revision":"d9cfd79e017d2585858e2e3522efebd5","url":"assets/img/alexa beach.d9cfd79e.webp"},{"revision":"ecd267a7749713ed9a3bc4aa651ebfae","url":"assets/img/aly brine.ecd267a7.webp"},{"revision":"b991fcb376400761a08c22477a1c5523","url":"assets/img/andrew knight.b991fcb3.webp"},{"revision":"9e04b8033ee7519f5586233bb1216f7c","url":"assets/img/andy warns.9e04b803.webp"},{"revision":"ee9a40d78a4ac767e2aa4e6ab75d6be3","url":"assets/img/angie jones.ee9a40d7.webp"},{"revision":"87812dfb4325551ec1046c8f017c5b96","url":"assets/img/ballroom.87812dfb.png"},{"revision":"542d556d133e6914c4caff7838bbcc2f","url":"assets/img/ben oconis.542d556d.webp"},{"revision":"2bc6e9b27dc0924b2b1ba181823c008c","url":"assets/img/carlos kidman.2bc6e9b2.webp"},{"revision":"3657007491bce650ad011a7ee07df08b","url":"assets/img/cartoonroom.36570074.png"},{"revision":"76d3eefced571f14225daae2f1be34fa","url":"assets/img/damian synadinos.76d3eefc.webp"},{"revision":"fe9937c427d8e3a7940cd8c9ded44905","url":"assets/img/darrel farris.fe9937c4.webp"},{"revision":"3e12aa9b89c300f5c6f6e226a4c36bba","url":"assets/img/eran kinsbruner.3e12aa9b.webp"},{"revision":"fb2c2b3c5a13daad62ffe053d8777cef","url":"assets/img/generic-profile.fb2c2b3c.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall12.20afd1a9.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall3.20afd1a9.png"},{"revision":"2da60d2127424f4ef413509e4f2fea19","url":"assets/img/interfaithroom.2da60d21.png"},{"revision":"99a6752b7082dc5d6dc654f4677fff63","url":"assets/img/jacob haning.99a6752b.webp"},{"revision":"7817176bd214990a1bc72ecc1957425f","url":"assets/img/jamie kelley.7817176b.webp"},{"revision":"c48b81ceba055ba2f62e1b722a928d6a","url":"assets/img/jeff sing.c48b81ce.webp"},{"revision":"f85744f5512faf1becbd52c23c398175","url":"assets/img/jenna charlton.f85744f5.webp"},{"revision":"901bf5239d447401e6d0175192ae8cbe","url":"assets/img/jerren every.901bf523.webp"},{"revision":"54dff9dd2f761f8b931d32e3f914d808","url":"assets/img/joel montvelisky.54dff9dd.webp"},{"revision":"24c5f269b789f598ec8d25f3485f38b1","url":"assets/img/leandro melendez.24c5f269.webp"},{"revision":"f3aa77319cac7c0ae697ce69681dba23","url":"assets/img/lee barnes.f3aa7731.webp"},{"revision":"f1be2743579f552a5b5fa03d543dd6d0","url":"assets/img/mala punyani.f1be2743.webp"},{"revision":"b85dc285eda9e340ff1a753ecc082211","url":"assets/img/melissa tondi.b85dc285.webp"},{"revision":"7205ac706cbbadfc536aa1b0755a0b4b","url":"assets/img/mohita prasad.7205ac70.webp"},{"revision":"11019bb638eee2b03c5f20206dcdf749","url":"assets/img/petros plakogiannis.11019bb6.webp"},{"revision":"a6598449f850f97af831b3d6741c417e","url":"assets/img/robert fornal.a6598449.webp"},{"revision":"fdbab44df63ad36b031444c290be8dbc","url":"assets/img/stacy wyatt.fdbab44d.webp"},{"revision":"f68b18deef878cf92bccf40c79e7be8f","url":"assets/img/studentalumniroom.f68b18de.png"},{"revision":"a939ecb91e885b9cfa5725aef3d4e54c","url":"assets/img/titus fortner.a939ecb9.webp"},{"revision":"10271f7273a511018eaf327471a234d6","url":"assets/img/usbanktheater.10271f72.png"},{"revision":"d82ac10d7810a011b7c3ae65bd7c4768","url":"assets/js/app.58e5d676.js"},{"revision":"4938d31e47942185ca847e5cf6dd2eed","url":"assets/js/page--src--pages--404-vue.6ad48137.js"},{"revision":"8032746e4d8de7ed605323a9a7709d60","url":"assets/js/page--src--pages--index-vue.f386bd81.js"},{"revision":"cfd64977de463eb135794632abb93301","url":"assets/js/page--src--templates--session-vue.88cf1387.js"},{"revision":"14abed9ce0e092b924639ca0ffd03b62","url":"assets/static/favicon.1539b60.af23d950429ffb54e42245904932783f.png"},{"revision":"b30ee95be125d7dff57231f889ac7c3e","url":"assets/static/favicon.62d22cb.af23d950429ffb54e42245904932783f.png"},{"revision":"0ab2d751cb5628b9c426d0af9dd5497f","url":"assets/static/favicon.7b22250.af23d950429ffb54e42245904932783f.png"},{"revision":"af49ef7347f7b4eec089a8c8f25fbd65","url":"assets/static/favicon.ac8d93a.af23d950429ffb54e42245904932783f.png"},{"revision":"dfc344bbd6ac9f6969c7b87c9068e30a","url":"assets/static/favicon.b9532cc.af23d950429ffb54e42245904932783f.png"},{"revision":"1eac566b8bcb4dde804bf8902c5939c7","url":"assets/static/favicon.ce0531f.af23d950429ffb54e42245904932783f.png"},{"revision":"7932a6488b5327c3f5b37153d4f97aa1","url":"assets/static/favicon.dc0cdc5.af23d950429ffb54e42245904932783f.png"},{"revision":"9383235b27041f682d1e6ef3fb21f393","url":"assets/static/favicon.f22e9f3.af23d950429ffb54e42245904932783f.png"},{"revision":"0fef8d1d8f29f26603d0d4287f13bc6c","url":"data.json"},{"revision":"af23d950429ffb54e42245904932783f","url":"logo-192.png"},{"revision":"208031b296f4c82b6b60c0c128871b90","url":"logo-512.png"},{"revision":"0e54fb2e2fb47e455a51b4ac4cfb0962","url":"manifest.json"}]);

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