import Vue from 'vue'
import Vuex from 'vuex'

import userprofile from './userprofile'
import myrecipes from './myrecipes'
import recipe from './recipe'
import timeline from './timeline'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      userprofile,
      myrecipes,
      recipe,
      timeline
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
