import { axios } from 'boot/axios'
import { myRecipes } from '../../statics/data/myRecipes'
import Amplify from '@aws-amplify/core'

export function mockMyRecipes (context) {
  context.commit('setMyRecipes', myRecipes)
}

export function fetchMyRecipes (context) {
  (async () => {
    try {
      var currentUser = await Amplify.Auth.currentAuthenticatedUser()
      // TODO URL have to configure in a central place is temporaryly a fix value for prototyping
      let response = await axios.get('http://localhost:8080/myrecipes/' + currentUser.attributes.sub)
      context.commit('setMyRecipes', response.data)
    } catch (error) {
      mockMyRecipes(context)
    }
  })()
}
