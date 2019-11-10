import { axios } from 'boot/axios'
import { myRecipes } from '../../statics/data/myRecipes'

export function mockMyRecipes (context) {
  context.commit('setMyRecipes', myRecipes)
}

export function fetchMyRecipes (context) {
  (async () => {
    try {
      // TODO URL have to configure in a central place and myRecipesId is temporaryly a fix value for prototyping
      let response = await axios.get('http://localhost:8080/myrecipes/3b9f5040-295d-4885-905c-6774208d38bc')
      context.commit('setMyRecipes', response.data)
    } catch (error) {
      mockMyRecipes(context)
    }
  })()
}
