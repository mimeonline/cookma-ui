// import { LocalStorage, uid } from 'quasar'
import { axios } from 'boot/axios'
import Amplify from '@aws-amplify/core'

import { recipe } from '../../statics/data/recipe'

export function storeRecipe ({ getters, commit }) {
  (async () => {
    try {
      var currentUser = await Amplify.Auth.currentAuthenticatedUser()
      console.log(currentUser.attributes.sub)
      commit('setUserId', currentUser.attributes.sub)
      commit('setImageId', 'statics/images/food-1932466_640.jpg')
      var recipeCreate = getters['recipeCreate']
      console.log(recipeCreate)
      // TODO URL have to configure in a central place is temporaryly a fix value for prototyping
      let response = await axios.post('http://localhost:8080/recipes', recipeCreate)
      console.log(response.data)
      this.$router.push({ path: '/recipe/' + response.data })
    } catch (error) {
      console.log(error)
    }
  })()
}

export function uploadRecipeImage (context, files) {
  let uploaData = new FormData()
  uploaData.append('file', files[0])
  // Promise is needed because QUploader wants to returned a Promise
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:4444/upload', uploaData, {
        headers: {
          'Content-Type': undefined
        }
      })
      .then(res => {
        resolve()
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function fetchRecipe (context, recipeId) {
  (async () => {
    try {
      // TODO URL have to configure in a central place is temporaryly a fix value for prototyping
      let response = await axios.get('http://localhost:8080/recipes/' + recipeId)
      console.log(response.data)
      context.commit('setRecipe', response.data)
    } catch (error) {
      mockRecipe(context)
    }
  })()
}

export function mockRecipe (context) {
  context.commit('setRecipe', recipe)
}
