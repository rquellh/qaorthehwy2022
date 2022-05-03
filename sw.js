importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"564c7c3a509f03d313a9f45dd5217c7c","url":"assets/css/0.styles.34e734ab.css"},{"revision":"543d795231266b8c7b5a2e50e9a0ccb9","url":"assets/data/404/index.json"},{"revision":"b1fc69f5fa87b36d926323a7f58c9233","url":"assets/data/AlexaBeach/index.json"},{"revision":"157ef9b276c5f0a64bef9f0e90baf4aa","url":"assets/data/AlyBrine/index.json"},{"revision":"9adc238839a08bddd0df2db4b82daa95","url":"assets/data/AmandaPerkins/index.json"},{"revision":"351ee19dc00a4cd5fb9ebfc1422fec1f","url":"assets/data/AndrewKnight/index.json"},{"revision":"7f9612488d440e728d840827cd1f11a6","url":"assets/data/AndyWarns/index.json"},{"revision":"f9d54f2d41e7bde3a756d0db974ad1c4","url":"assets/data/AngieJones/index.json"},{"revision":"35faaae8f279cf4c737cc4404fb922ab","url":"assets/data/BenOconis/index.json"},{"revision":"0891b53cf36b996bc23e00424c3affa5","url":"assets/data/CarlosKidman/index.json"},{"revision":"55f854851bca9427de9a34fbc7204b67","url":"assets/data/DamianSynadinos/index.json"},{"revision":"0537f13dfcb87225c3139bef0672772c","url":"assets/data/DarrelFarris/index.json"},{"revision":"727e6091133f9797069a884c14f3f150","url":"assets/data/EranKinsbruner/index.json"},{"revision":"db10defcdc664664ded518e44200687c","url":"assets/data/index.json"},{"revision":"8dcf06ac7edbb9ee1c5f2e5d0a7af6b5","url":"assets/data/JacobHaning/index.json"},{"revision":"831493c9186b8424c2918d7c60a4fd2b","url":"assets/data/JamieKelley/index.json"},{"revision":"089b146d58681e06d4647101e6fb6701","url":"assets/data/JeffSing/index.json"},{"revision":"48b3d9adb210934293da6017fa2ca48d","url":"assets/data/JennaCharlton/index.json"},{"revision":"226f4fe87872e6699c1438a9f61873e7","url":"assets/data/JerrenEvery/index.json"},{"revision":"8d3cddb6153f5bda747b80425bfd557b","url":"assets/data/JoelMontvelisky/index.json"},{"revision":"8aa2891aa33c425c60922ac7127fdf58","url":"assets/data/JustinHunter/index.json"},{"revision":"c87ea9409b8ed5cd03658fdb4eb37b78","url":"assets/data/LeandroMelendez/index.json"},{"revision":"a587ecb832f8fb02821d76798f79f007","url":"assets/data/LeeBarnes/index.json"},{"revision":"9a93d6a1e948baa3a7b9e45aac351a71","url":"assets/data/MalaPunyani/index.json"},{"revision":"d9c398e7c83366e9543838418b9bad70","url":"assets/data/MatthewEakin/index.json"},{"revision":"ae2ddd2022fa619ab77ab2c4c577602e","url":"assets/data/MelissaTondi/index.json"},{"revision":"20d80ff57a84b7f99db0aac8c2f13067","url":"assets/data/MohitaPrasad/index.json"},{"revision":"ba0d3191b38eaa705a918c7abb913010","url":"assets/data/PetrosPlakogiannis/index.json"},{"revision":"31619a9e8eea4258a7a00c41c8f9f782","url":"assets/data/RobertFornal/index.json"},{"revision":"625d49982f145128062f68150ad9175d","url":"assets/data/ShyamSunder/index.json"},{"revision":"7313387d1e37fad1a28f9419cdbf3c6f","url":"assets/data/StacyWyatt/index.json"},{"revision":"283673c707c54a9b70f9285c9532a602","url":"assets/data/ThomasHaver/index.json"},{"revision":"02610350b0e179c4257a20bc59c33a47","url":"assets/data/TitusFortner/index.json"},{"revision":"d9cfd79e017d2585858e2e3522efebd5","url":"assets/img/alexa beach.d9cfd79e.webp"},{"revision":"ecd267a7749713ed9a3bc4aa651ebfae","url":"assets/img/aly brine.ecd267a7.webp"},{"revision":"b991fcb376400761a08c22477a1c5523","url":"assets/img/andrew knight.b991fcb3.webp"},{"revision":"9e04b8033ee7519f5586233bb1216f7c","url":"assets/img/andy warns.9e04b803.webp"},{"revision":"ee9a40d78a4ac767e2aa4e6ab75d6be3","url":"assets/img/angie jones.ee9a40d7.webp"},{"revision":"87812dfb4325551ec1046c8f017c5b96","url":"assets/img/ballroom.87812dfb.png"},{"revision":"542d556d133e6914c4caff7838bbcc2f","url":"assets/img/ben oconis.542d556d.webp"},{"revision":"2bc6e9b27dc0924b2b1ba181823c008c","url":"assets/img/carlos kidman.2bc6e9b2.webp"},{"revision":"3657007491bce650ad011a7ee07df08b","url":"assets/img/cartoonroom.36570074.png"},{"revision":"76d3eefced571f14225daae2f1be34fa","url":"assets/img/damian synadinos.76d3eefc.webp"},{"revision":"fe9937c427d8e3a7940cd8c9ded44905","url":"assets/img/darrel farris.fe9937c4.webp"},{"revision":"3e12aa9b89c300f5c6f6e226a4c36bba","url":"assets/img/eran kinsbruner.3e12aa9b.webp"},{"revision":"fb2c2b3c5a13daad62ffe053d8777cef","url":"assets/img/generic-profile.fb2c2b3c.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall12.20afd1a9.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall3.20afd1a9.png"},{"revision":"2da60d2127424f4ef413509e4f2fea19","url":"assets/img/interfaithroom.2da60d21.png"},{"revision":"99a6752b7082dc5d6dc654f4677fff63","url":"assets/img/jacob haning.99a6752b.webp"},{"revision":"7817176bd214990a1bc72ecc1957425f","url":"assets/img/jamie kelley.7817176b.webp"},{"revision":"c48b81ceba055ba2f62e1b722a928d6a","url":"assets/img/jeff sing.c48b81ce.webp"},{"revision":"f85744f5512faf1becbd52c23c398175","url":"assets/img/jenna charlton.f85744f5.webp"},{"revision":"901bf5239d447401e6d0175192ae8cbe","url":"assets/img/jerren every.901bf523.webp"},{"revision":"54dff9dd2f761f8b931d32e3f914d808","url":"assets/img/joel montvelisky.54dff9dd.webp"},{"revision":"24c5f269b789f598ec8d25f3485f38b1","url":"assets/img/leandro melendez.24c5f269.webp"},{"revision":"f3aa77319cac7c0ae697ce69681dba23","url":"assets/img/lee barnes.f3aa7731.webp"},{"revision":"f1be2743579f552a5b5fa03d543dd6d0","url":"assets/img/mala punyani.f1be2743.webp"},{"revision":"b85dc285eda9e340ff1a753ecc082211","url":"assets/img/melissa tondi.b85dc285.webp"},{"revision":"7205ac706cbbadfc536aa1b0755a0b4b","url":"assets/img/mohita prasad.7205ac70.webp"},{"revision":"11019bb638eee2b03c5f20206dcdf749","url":"assets/img/petros plakogiannis.11019bb6.webp"},{"revision":"a6598449f850f97af831b3d6741c417e","url":"assets/img/robert fornal.a6598449.webp"},{"revision":"fdbab44df63ad36b031444c290be8dbc","url":"assets/img/stacy wyatt.fdbab44d.webp"},{"revision":"f68b18deef878cf92bccf40c79e7be8f","url":"assets/img/studentalumniroom.f68b18de.png"},{"revision":"a939ecb91e885b9cfa5725aef3d4e54c","url":"assets/img/titus fortner.a939ecb9.webp"},{"revision":"10271f7273a511018eaf327471a234d6","url":"assets/img/usbanktheater.10271f72.png"},{"revision":"f32d92f18f120faddd49baca90e4f79e","url":"assets/js/app.3dd64c41.js"},{"revision":"4938d31e47942185ca847e5cf6dd2eed","url":"assets/js/page--src--pages--404-vue.6ad48137.js"},{"revision":"552096cc91566c62ae55142cfe6c0b9a","url":"assets/js/page--src--pages--index-vue.badcf680.js"},{"revision":"cfd64977de463eb135794632abb93301","url":"assets/js/page--src--templates--session-vue.88cf1387.js"},{"revision":"14abed9ce0e092b924639ca0ffd03b62","url":"assets/static/favicon.1539b60.af23d950429ffb54e42245904932783f.png"},{"revision":"b30ee95be125d7dff57231f889ac7c3e","url":"assets/static/favicon.62d22cb.af23d950429ffb54e42245904932783f.png"},{"revision":"0ab2d751cb5628b9c426d0af9dd5497f","url":"assets/static/favicon.7b22250.af23d950429ffb54e42245904932783f.png"},{"revision":"af49ef7347f7b4eec089a8c8f25fbd65","url":"assets/static/favicon.ac8d93a.af23d950429ffb54e42245904932783f.png"},{"revision":"dfc344bbd6ac9f6969c7b87c9068e30a","url":"assets/static/favicon.b9532cc.af23d950429ffb54e42245904932783f.png"},{"revision":"1eac566b8bcb4dde804bf8902c5939c7","url":"assets/static/favicon.ce0531f.af23d950429ffb54e42245904932783f.png"},{"revision":"7932a6488b5327c3f5b37153d4f97aa1","url":"assets/static/favicon.dc0cdc5.af23d950429ffb54e42245904932783f.png"},{"revision":"9383235b27041f682d1e6ef3fb21f393","url":"assets/static/favicon.f22e9f3.af23d950429ffb54e42245904932783f.png"},{"revision":"0fef8d1d8f29f26603d0d4287f13bc6c","url":"data.json"},{"revision":"af23d950429ffb54e42245904932783f","url":"logo-192.png"},{"revision":"208031b296f4c82b6b60c0c128871b90","url":"logo-512.png"}]);

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