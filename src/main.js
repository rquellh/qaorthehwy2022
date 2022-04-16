// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import LinkedIn from "@/components/icons/LinkedIn";
import Bug from "@/components/icons/Bug"
import CircleSolid from "@/components/icons/CircleSolid"
import Github from "@/components/icons/Github"
import Website from "@/components/icons/Website"
import StarOutline from "@/components/icons/StarOutline"
import StarSolid from "@/components/icons/StarSolid"
import Twitter from "@/components/icons/Twitter"
import ChevronLeft from "@/components/icons/ChevronLeft"
import Youtube from "@/components/icons/Youtube"
import Slack from "@/components/icons/Slack"

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {
    theme: {
      themes: {
        light: {
          primary: '#1b51aa',
        },
        dark: {
          primary: '#1b51aa',
        },
      },
    },
    icons: {
      values: {
        circlesolid: {
          component: CircleSolid,
        },
        linkedin:{
          component: LinkedIn
        },
        bug:{
          component: Bug
        },
        github:{
          component: Github
        },
        website:{
          component: Website
        },
        staroutline:{
          component: StarOutline
        },
        starsolid:{
          component: StarSolid
        },
        twitter:{
          component: Twitter
        },
        linkedin:{
          component: LinkedIn
        },
        chevronleft:{
          component: ChevronLeft
        }, 
        youtube:{
          component: Youtube
        },
        slack:{
          component: Slack
        }
      }
    }
  } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
