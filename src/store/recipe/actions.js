import { LocalStorage, uid } from 'quasar'
import { axios } from 'boot/axios'
import Amplify from '@aws-amplify/core'

import { recipe } from '../../statics/data/recipe'
import { myRecipes } from '../../statics/data/myRecipes'

async function postData (recipe) {
  let apiName = 'apie4be9e4f'
  let path = '/recipes'
  let myInit = {
    headers: {
      Authorization: `Bearer ${(await Amplify.Auth.currentSession()).getAccessToken().getJwtToken()}`,
      'Content-Type': 'application/json'
    },
    body: { ...recipe }
  }
  return Amplify.API.post(apiName, path, myInit)
}

export function storeRecipe ({ getters, commit }) {
  (async () => {
    var currentUser = await Amplify.Auth.currentAuthenticatedUser()
    commit('setUserId', currentUser.attributes.sub)
  })()
  commit('setRecipeId', uid())
  console.log(new Date())
  // postData(getters.recipeCreate)
  postData(recipe)

  let recipes = LocalStorage.getItem('recipes')
  if (recipes) {
    recipes.push(getters.recipeCreate)
    LocalStorage.set('recipes', recipes)
  } else {
    LocalStorage.set('recipes', [getters.recipeCreate])
  }
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

async function getRecipes () {
  let apiName = 'apie4be9e4f'
  let path = '/recipes'
  let myInit = {
    headers: {
      // 'Authorization': `Bearer ${(await this.$Amplify.Auth.currentSession()).getAccessToken().getJwtToken()}`,
      // 'Content-Type': 'application/json'
    }
  }
  return Amplify.API.get(apiName, path, myInit)
}

export function fetchUserRecipes (context) {
  getRecipes()
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

export function mockRecipe (context) {
  context.commit('setRecipe', recipe)
}

export function mockMyRecipes (context) {
  context.commit('setMyRecipes', myRecipes)
}
