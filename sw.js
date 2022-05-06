importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"0ca90bc2c6f8bb83960aaf5880dcdfd6","url":"assets/css/0.styles.c3938cae.css"},{"revision":"b3faaa414ec987acbd193016fffeef81","url":"assets/data/404/index.json"},{"revision":"0329731ba9121f137202c40c6496ffbc","url":"assets/data/AlexaBeach/index.json"},{"revision":"24e1fcd0945b808c0d943f7a4eb48f85","url":"assets/data/AlyBrine/index.json"},{"revision":"41ce60af987afbb371a86fe126bc5f8c","url":"assets/data/AmandaPerkins/index.json"},{"revision":"3d39ad14a24f34838364f946c111f844","url":"assets/data/AndrewKnight/index.json"},{"revision":"8ec146cfd2feed6a7234ca6315440c80","url":"assets/data/AndyWarns/index.json"},{"revision":"59126a77421ac9855b22c65d4ed5777f","url":"assets/data/AngieJones/index.json"},{"revision":"ca1e645ea824dfb2429ca27cebb94c32","url":"assets/data/BenOconis/index.json"},{"revision":"88674685925026d10ca676d6f01e3778","url":"assets/data/CarlosKidman/index.json"},{"revision":"6c8b846b918295c2dd64c9b5a8e5c596","url":"assets/data/DamianSynadinos/index.json"},{"revision":"28c49d54df20c70ff364d4324083d1ee","url":"assets/data/DarrelFarris/index.json"},{"revision":"44f0294ae7d9e15f934828c674ded6ca","url":"assets/data/EranKinsbruner/index.json"},{"revision":"947594e00bdc69c14a7f9228cb2e7d51","url":"assets/data/HiteshPatel/index.json"},{"revision":"db3d6f57990459d4bfb141a1e730fa5e","url":"assets/data/index.json"},{"revision":"56da383616a98e361f6b394dd5de8bdf","url":"assets/data/JacobHaning/index.json"},{"revision":"f48f7168f394ff70bea010a136608d47","url":"assets/data/JamieKelley/index.json"},{"revision":"9ff37c47d034f29602a7ab5db545fc58","url":"assets/data/JeffSing/index.json"},{"revision":"b0065e0806e60d6b2f9afd4cc394c124","url":"assets/data/JennaCharlton/index.json"},{"revision":"b15645cda38779382bb58ee3c7b40e0f","url":"assets/data/JoelMontvelisky/index.json"},{"revision":"120dd8ce825df01f8a848909ed6bcf78","url":"assets/data/JustinHunter/index.json"},{"revision":"ce32b62c4f8afdbe23a83c0dd6c141d5","url":"assets/data/LeandroMelendez/index.json"},{"revision":"045d8bb4926dd85c30f6a02293059e9e","url":"assets/data/LeeBarnes/index.json"},{"revision":"a84791b58f52aad4e40eeaeff49c4ac8","url":"assets/data/MageshChandran/index.json"},{"revision":"d59ee5c26dbbf8b88c5a512ed1a807e9","url":"assets/data/MalaPunyani/index.json"},{"revision":"f29442072795d6c0051bf850c374d8ff","url":"assets/data/MatthewEakin/index.json"},{"revision":"ef2f37e1aeada9c96828b707356210b5","url":"assets/data/MelissaTondi/index.json"},{"revision":"021f83c660c4890e397dcc9362e08d1d","url":"assets/data/MohitaPrasad/index.json"},{"revision":"ebf8680f950fc212a05583b091ca37a5","url":"assets/data/PetrosPlakogiannis/index.json"},{"revision":"809af825779b8c1769a2dceb117f3bc7","url":"assets/data/RobertFornal/index.json"},{"revision":"9dc6273efb3e2c73ff2fc5fcbf996a79","url":"assets/data/ShyamSunder/index.json"},{"revision":"ad5298cb70a3132a35c1d7ae10e7e1e6","url":"assets/data/StacyWyatt/index.json"},{"revision":"fb9266b5e3cb1ff43b3d2d3a185d0517","url":"assets/data/ThomasHaver/index.json"},{"revision":"a9e0109f5ca86bca4539b941c69ab79d","url":"assets/data/TitusFortner/index.json"},{"revision":"d9cfd79e017d2585858e2e3522efebd5","url":"assets/img/alexa beach.d9cfd79e.webp"},{"revision":"ecd267a7749713ed9a3bc4aa651ebfae","url":"assets/img/aly brine.ecd267a7.webp"},{"revision":"b991fcb376400761a08c22477a1c5523","url":"assets/img/andrew knight.b991fcb3.webp"},{"revision":"9e04b8033ee7519f5586233bb1216f7c","url":"assets/img/andy warns.9e04b803.webp"},{"revision":"ee9a40d78a4ac767e2aa4e6ab75d6be3","url":"assets/img/angie jones.ee9a40d7.webp"},{"revision":"542d556d133e6914c4caff7838bbcc2f","url":"assets/img/ben oconis.542d556d.webp"},{"revision":"2bc6e9b27dc0924b2b1ba181823c008c","url":"assets/img/carlos kidman.2bc6e9b2.webp"},{"revision":"3657007491bce650ad011a7ee07df08b","url":"assets/img/cartoonroom.36570074.png"},{"revision":"76d3eefced571f14225daae2f1be34fa","url":"assets/img/damian synadinos.76d3eefc.webp"},{"revision":"fe9937c427d8e3a7940cd8c9ded44905","url":"assets/img/darrel farris.fe9937c4.webp"},{"revision":"ad26e48a3782ea95fc3a221a86e2f05c","url":"assets/img/eastballroom.ad26e48a.png"},{"revision":"3e12aa9b89c300f5c6f6e226a4c36bba","url":"assets/img/eran kinsbruner.3e12aa9b.webp"},{"revision":"fb2c2b3c5a13daad62ffe053d8777cef","url":"assets/img/generic-profile.fb2c2b3c.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall12.20afd1a9.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall3.20afd1a9.png"},{"revision":"2da60d2127424f4ef413509e4f2fea19","url":"assets/img/interfaithroom.2da60d21.png"},{"revision":"99a6752b7082dc5d6dc654f4677fff63","url":"assets/img/jacob haning.99a6752b.webp"},{"revision":"02a6f6b5bba01ae80681a45f7212304d","url":"assets/img/james otworth.02a6f6b5.webp"},{"revision":"7817176bd214990a1bc72ecc1957425f","url":"assets/img/jamie kelley.7817176b.webp"},{"revision":"c48b81ceba055ba2f62e1b722a928d6a","url":"assets/img/jeff sing.c48b81ce.webp"},{"revision":"f85744f5512faf1becbd52c23c398175","url":"assets/img/jenna charlton.f85744f5.webp"},{"revision":"901bf5239d447401e6d0175192ae8cbe","url":"assets/img/jerren every.901bf523.webp"},{"revision":"54dff9dd2f761f8b931d32e3f914d808","url":"assets/img/joel montvelisky.54dff9dd.webp"},{"revision":"24c5f269b789f598ec8d25f3485f38b1","url":"assets/img/leandro melendez.24c5f269.webp"},{"revision":"f3aa77319cac7c0ae697ce69681dba23","url":"assets/img/lee barnes.f3aa7731.webp"},{"revision":"f1be2743579f552a5b5fa03d543dd6d0","url":"assets/img/mala punyani.f1be2743.webp"},{"revision":"b85dc285eda9e340ff1a753ecc082211","url":"assets/img/melissa tondi.b85dc285.webp"},{"revision":"7205ac706cbbadfc536aa1b0755a0b4b","url":"assets/img/mohita prasad.7205ac70.webp"},{"revision":"11019bb638eee2b03c5f20206dcdf749","url":"assets/img/petros plakogiannis.11019bb6.webp"},{"revision":"a6598449f850f97af831b3d6741c417e","url":"assets/img/robert fornal.a6598449.webp"},{"revision":"fdbab44df63ad36b031444c290be8dbc","url":"assets/img/stacy wyatt.fdbab44d.webp"},{"revision":"f68b18deef878cf92bccf40c79e7be8f","url":"assets/img/studentalumniroom.f68b18de.png"},{"revision":"a939ecb91e885b9cfa5725aef3d4e54c","url":"assets/img/titus fortner.a939ecb9.webp"},{"revision":"6f11ca8a68a77381697ab4da77f0333f","url":"assets/img/westballroom.6f11ca8a.png"},{"revision":"8f552cf60d94ffd899cd801d6b73d374","url":"assets/js/app.decaba28.js"},{"revision":"4938d31e47942185ca847e5cf6dd2eed","url":"assets/js/page--src--pages--404-vue.6ad48137.js"},{"revision":"9356717676aee83bc70cf787fae2deb8","url":"assets/js/page--src--pages--index-vue.3e8a48b3.js"},{"revision":"8f2f844899852b7f7687d3ba976f1fac","url":"assets/js/page--src--templates--session-vue.abda31ba.js"},{"revision":"14abed9ce0e092b924639ca0ffd03b62","url":"assets/static/favicon.1539b60.af23d950429ffb54e42245904932783f.png"},{"revision":"b30ee95be125d7dff57231f889ac7c3e","url":"assets/static/favicon.62d22cb.af23d950429ffb54e42245904932783f.png"},{"revision":"0ab2d751cb5628b9c426d0af9dd5497f","url":"assets/static/favicon.7b22250.af23d950429ffb54e42245904932783f.png"},{"revision":"af49ef7347f7b4eec089a8c8f25fbd65","url":"assets/static/favicon.ac8d93a.af23d950429ffb54e42245904932783f.png"},{"revision":"dfc344bbd6ac9f6969c7b87c9068e30a","url":"assets/static/favicon.b9532cc.af23d950429ffb54e42245904932783f.png"},{"revision":"1eac566b8bcb4dde804bf8902c5939c7","url":"assets/static/favicon.ce0531f.af23d950429ffb54e42245904932783f.png"},{"revision":"7932a6488b5327c3f5b37153d4f97aa1","url":"assets/static/favicon.dc0cdc5.af23d950429ffb54e42245904932783f.png"},{"revision":"9383235b27041f682d1e6ef3fb21f393","url":"assets/static/favicon.f22e9f3.af23d950429ffb54e42245904932783f.png"},{"revision":"135723cd661e3f4257dfeb165545645a","url":"data.json"},{"revision":"af23d950429ffb54e42245904932783f","url":"logo-192.png"},{"revision":"208031b296f4c82b6b60c0c128871b90","url":"logo-512.png"},{"revision":"cb2dffe13d4fe4384b744b5c99edcca6","url":"manifest.json"}]);

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