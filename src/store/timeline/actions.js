import { axios } from 'boot/axios'
import Amplify from '@aws-amplify/core'
import { timelineRecipes } from '../../statics/data/timelinecards'

export function fetchTimelineRecipes (context) {
  ;(async () => {
    try {
      var currentUser = await Amplify.Auth.currentAuthenticatedUser()
      // TODO URL have to configure in a central place is temporaryly a fix value for prototyping
      let response = await axios.get('http://localhost:8080/timeline/' + currentUser.attributes.sub)
      context.commit('timelineRecipes', response.data)
    } catch (error) {
      mockTimelineRecipes(context)
    }
  })()
}

export function mockTimelineRecipes (context) {
  context.commit('timelineRecipes', timelineRecipes)
}
