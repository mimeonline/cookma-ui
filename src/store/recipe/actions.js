import { LocalStorage } from 'quasar'
import { axios } from 'boot/axios'

import { recipe } from '../../statics/data/recipe'
import { myRecipes } from '../../statics/data/myRecipes'

export function storeRecipe ({ getters }) {
  let recipes = LocalStorage.getItem('recipes')
  if (recipes) {
    recipes.push(getters.recipe)
    LocalStorage.set('recipes', recipes)
  } else {
    LocalStorage.set('recipes', [getters.recipe])
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

export function mockRecipe (context) {
  context.commit('setRecipe', recipe)
}

export function mockMyRecipes (context) {
  context.commit('setMyRecipes', myRecipes)
}
