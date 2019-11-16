// import { LocalStorage, uid } from 'quasar'
import { axios } from 'boot/axios'
// import Amplify from '@aws-amplify/core'

import { recipe } from '../../statics/data/recipe'

// async function postData (recipe) {
//   let apiName = 'apie4be9e4f'
//   let path = '/recipes'
//   let myInit = {
//     headers: {
//       Authorization: `Bearer ${(await Amplify.Auth.currentSession()).getAccessToken().getJwtToken()}`,
//       'Content-Type': 'application/json'
//     },
//     body: { ...recipe }
//   }
//   return Amplify.API.post(apiName, path, myInit)
// }

export function storeRecipe ({ getters, commit }) {
  (async () => {
    try {
      commit('setUserId', '3b9f5040-295d-4885-905c-6774208d38bc')
      commit('setImageId', 'statics/images/food-1932466_640.jpg')
      var recipeCreate = getters['recipeCreate']
      console.log(recipeCreate)
      // TODO URL have to configure in a central place and myRecipesId is temporaryly a fix value for prototyping
      let response = await axios.post('http://localhost:8080/recipes', recipeCreate)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  })()
  // (async () => {
  //   var currentUser = await Amplify.Auth.currentAuthenticatedUser()
  //   commit('setUserId', currentUser.attributes.sub)
  // })()
  // commit('setRecipeId', uid())
  // console.log(new Date())
  // // postData(getters.recipeCreate)
  // postData(recipe)

  // let recipes = LocalStorage.getItem('recipes')
  // if (recipes) {
  //   recipes.push(getters.recipeCreate)
  //   LocalStorage.set('recipes', recipes)
  // } else {
  //   LocalStorage.set('recipes', [getters.recipeCreate])
  // }
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

// async function getRecipes () {
//   let apiName = 'apie4be9e4f'
//   let path = '/recipes'
//   let myInit = {
//     headers: {
//       // 'Authorization': `Bearer ${(await this.$Amplify.Auth.currentSession()).getAccessToken().getJwtToken()}`,
//       // 'Content-Type': 'application/json'
//     }
//   }
//   return Amplify.API.get(apiName, path, myInit)
// }

export function fetchRecipe (context, recipeId) {
  (async () => {
    try {
      // TODO URL have to configure in a central place and myRecipesId is temporaryly a fix value for prototyping
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
