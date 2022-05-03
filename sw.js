importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([{"revision":"564c7c3a509f03d313a9f45dd5217c7c","url":"assets/css/0.styles.34e734ab.css"},{"revision":"c13217af467c4cb275415693eb8eb436","url":"assets/data/404/index.json"},{"revision":"9c2a0db62d048888f6f25ad947d0a7ab","url":"assets/data/AlexaBeach/index.json"},{"revision":"a5b601d035bd1c96687bad378f941c57","url":"assets/data/AlyBrine/index.json"},{"revision":"7162a52aa62c337c23a43abe62ef4672","url":"assets/data/AmandaPerkins/index.json"},{"revision":"70f7a9da7f91c7d09ce2e18f131b8244","url":"assets/data/AndrewKnight/index.json"},{"revision":"59848b822083be33eaa3d4d3bc1f9890","url":"assets/data/AndyWarns/index.json"},{"revision":"270df5cda2f27961a555de9f3e99092b","url":"assets/data/AngieJones/index.json"},{"revision":"2d2a30b61a6eefe4dc353cf26205f0c1","url":"assets/data/BenOconis/index.json"},{"revision":"06a6dffad7db315018181a6dc5306c38","url":"assets/data/CarlosKidman/index.json"},{"revision":"3979cd184cc8a0efd9e0472ece072320","url":"assets/data/DamianSynadinos/index.json"},{"revision":"43036017db178a164794cc051a35f199","url":"assets/data/DarrelFarris/index.json"},{"revision":"d28c0cc5b55cece098dc1c0ae79bdb27","url":"assets/data/EranKinsbruner/index.json"},{"revision":"1e5d259c32173e0cd28472809e9a722a","url":"assets/data/index.json"},{"revision":"11acac4e79a5bdb566905251e915b0cc","url":"assets/data/JacobHaning/index.json"},{"revision":"4143ffc7c8eb37479027f730a0b9fe71","url":"assets/data/JamieKelley/index.json"},{"revision":"d5e2c903d82dda1433688c8b574b7e44","url":"assets/data/JeffSing/index.json"},{"revision":"6b262fcfacfb07669d205bdeb47ddb96","url":"assets/data/JennaCharlton/index.json"},{"revision":"c1c23fe38b50fd2b82c6c34c005fad04","url":"assets/data/JerrenEvery/index.json"},{"revision":"645861c0d2bbeb40225360ce3ff819d8","url":"assets/data/JoelMontvelisky/index.json"},{"revision":"283e686e30f250fe72a8bb7f50335061","url":"assets/data/JustinHunter/index.json"},{"revision":"18707d4b7c951d8805cb6027eab1ce6d","url":"assets/data/LeandroMelendez/index.json"},{"revision":"4518e8318ca42a3ca57e1ae50b5627ec","url":"assets/data/LeeBarnes/index.json"},{"revision":"8e23b510800b6cb989b7b6ac0fe884f8","url":"assets/data/MalaPunyani/index.json"},{"revision":"6aaca5e49a52f79a448c92379feecbf9","url":"assets/data/MatthewEakin/index.json"},{"revision":"2a7b877f615a7c4faf5c532d59655652","url":"assets/data/MelissaTondi/index.json"},{"revision":"ef9eb0f9b0507b0cc14884b27af4cde3","url":"assets/data/MohitaPrasad/index.json"},{"revision":"50ddf0f9afb97a4509a841b75beb7ceb","url":"assets/data/PetrosPlakogiannis/index.json"},{"revision":"bbe3b5e8190fa5b30fb9b14be1599ad3","url":"assets/data/RobertFornal/index.json"},{"revision":"04c1185aa74b2f779aa276aa4fec28f7","url":"assets/data/ShyamSunder/index.json"},{"revision":"7e3a613672c1417103426642eb19a61b","url":"assets/data/StacyWyatt/index.json"},{"revision":"32389d6a50cbcb21118a501dc5fdf1a9","url":"assets/data/ThomasHaver/index.json"},{"revision":"82f5fa7b88c1ab416b2e7767c5f98b90","url":"assets/data/TitusFortner/index.json"},{"revision":"d9cfd79e017d2585858e2e3522efebd5","url":"assets/img/alexa beach.d9cfd79e.webp"},{"revision":"ecd267a7749713ed9a3bc4aa651ebfae","url":"assets/img/aly brine.ecd267a7.webp"},{"revision":"b991fcb376400761a08c22477a1c5523","url":"assets/img/andrew knight.b991fcb3.webp"},{"revision":"9e04b8033ee7519f5586233bb1216f7c","url":"assets/img/andy warns.9e04b803.webp"},{"revision":"ee9a40d78a4ac767e2aa4e6ab75d6be3","url":"assets/img/angie jones.ee9a40d7.webp"},{"revision":"87812dfb4325551ec1046c8f017c5b96","url":"assets/img/ballroom.87812dfb.png"},{"revision":"542d556d133e6914c4caff7838bbcc2f","url":"assets/img/ben oconis.542d556d.webp"},{"revision":"2bc6e9b27dc0924b2b1ba181823c008c","url":"assets/img/carlos kidman.2bc6e9b2.webp"},{"revision":"3657007491bce650ad011a7ee07df08b","url":"assets/img/cartoonroom.36570074.png"},{"revision":"76d3eefced571f14225daae2f1be34fa","url":"assets/img/damian synadinos.76d3eefc.webp"},{"revision":"fe9937c427d8e3a7940cd8c9ded44905","url":"assets/img/darrel farris.fe9937c4.webp"},{"revision":"3e12aa9b89c300f5c6f6e226a4c36bba","url":"assets/img/eran kinsbruner.3e12aa9b.webp"},{"revision":"fb2c2b3c5a13daad62ffe053d8777cef","url":"assets/img/generic-profile.fb2c2b3c.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall12.20afd1a9.png"},{"revision":"20afd1a91685230c0d5d372529cdcf67","url":"assets/img/greathall3.20afd1a9.png"},{"revision":"2da60d2127424f4ef413509e4f2fea19","url":"assets/img/interfaithroom.2da60d21.png"},{"revision":"99a6752b7082dc5d6dc654f4677fff63","url":"assets/img/jacob haning.99a6752b.webp"},{"revision":"7817176bd214990a1bc72ecc1957425f","url":"assets/img/jamie kelley.7817176b.webp"},{"revision":"c48b81ceba055ba2f62e1b722a928d6a","url":"assets/img/jeff sing.c48b81ce.webp"},{"revision":"f85744f5512faf1becbd52c23c398175","url":"assets/img/jenna charlton.f85744f5.webp"},{"revision":"901bf5239d447401e6d0175192ae8cbe","url":"assets/img/jerren every.901bf523.webp"},{"revision":"54dff9dd2f761f8b931d32e3f914d808","url":"assets/img/joel montvelisky.54dff9dd.webp"},{"revision":"24c5f269b789f598ec8d25f3485f38b1","url":"assets/img/leandro melendez.24c5f269.webp"},{"revision":"f3aa77319cac7c0ae697ce69681dba23","url":"assets/img/lee barnes.f3aa7731.webp"},{"revision":"f1be2743579f552a5b5fa03d543dd6d0","url":"assets/img/mala punyani.f1be2743.webp"},{"revision":"b85dc285eda9e340ff1a753ecc082211","url":"assets/img/melissa tondi.b85dc285.webp"},{"revision":"7205ac706cbbadfc536aa1b0755a0b4b","url":"assets/img/mohita prasad.7205ac70.webp"},{"revision":"11019bb638eee2b03c5f20206dcdf749","url":"assets/img/petros plakogiannis.11019bb6.webp"},{"revision":"a6598449f850f97af831b3d6741c417e","url":"assets/img/robert fornal.a6598449.webp"},{"revision":"fdbab44df63ad36b031444c290be8dbc","url":"assets/img/stacy wyatt.fdbab44d.webp"},{"revision":"f68b18deef878cf92bccf40c79e7be8f","url":"assets/img/studentalumniroom.f68b18de.png"},{"revision":"a939ecb91e885b9cfa5725aef3d4e54c","url":"assets/img/titus fortner.a939ecb9.webp"},{"revision":"10271f7273a511018eaf327471a234d6","url":"assets/img/usbanktheater.10271f72.png"},{"revision":"00370945bf3f44366a282dbb9554ad57","url":"assets/js/app.4250645d.js"},{"revision":"4938d31e47942185ca847e5cf6dd2eed","url":"assets/js/page--src--pages--404-vue.6ad48137.js"},{"revision":"02584f5700182e3be1ea48e8ccc149f0","url":"assets/js/page--src--pages--index-vue.931af728.js"},{"revision":"cfd64977de463eb135794632abb93301","url":"assets/js/page--src--templates--session-vue.88cf1387.js"},{"revision":"14abed9ce0e092b924639ca0ffd03b62","url":"assets/static/favicon.1539b60.af23d950429ffb54e42245904932783f.png"},{"revision":"b30ee95be125d7dff57231f889ac7c3e","url":"assets/static/favicon.62d22cb.af23d950429ffb54e42245904932783f.png"},{"revision":"0ab2d751cb5628b9c426d0af9dd5497f","url":"assets/static/favicon.7b22250.af23d950429ffb54e42245904932783f.png"},{"revision":"af49ef7347f7b4eec089a8c8f25fbd65","url":"assets/static/favicon.ac8d93a.af23d950429ffb54e42245904932783f.png"},{"revision":"dfc344bbd6ac9f6969c7b87c9068e30a","url":"assets/static/favicon.b9532cc.af23d950429ffb54e42245904932783f.png"},{"revision":"1eac566b8bcb4dde804bf8902c5939c7","url":"assets/static/favicon.ce0531f.af23d950429ffb54e42245904932783f.png"},{"revision":"7932a6488b5327c3f5b37153d4f97aa1","url":"assets/static/favicon.dc0cdc5.af23d950429ffb54e42245904932783f.png"},{"revision":"9383235b27041f682d1e6ef3fb21f393","url":"assets/static/favicon.f22e9f3.af23d950429ffb54e42245904932783f.png"},{"revision":"0fef8d1d8f29f26603d0d4287f13bc6c","url":"data.json"},{"revision":"af23d950429ffb54e42245904932783f","url":"logo-192.png"},{"revision":"208031b296f4c82b6b60c0c128871b90","url":"logo-512.png"}]);

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