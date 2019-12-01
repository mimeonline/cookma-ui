// import { LocalStorage, uid } from 'quasar'
import { axios } from 'boot/axios'
import { Notify } from 'quasar'
import Amplify from '@aws-amplify/core'

import { recipe } from '../../statics/data/recipe'

const emptyRecipeCreate = {
  name: '',
  description: '',
  images: [
    {
      position: 1,
      imageId: ''
    }
  ],
  expense: [''],
  meal: [''],
  nutritionForm: [''],
  times: {
    preparation: 0,
    cooking: 0,
    rest: 0
  },
  ingredients: [
    {
      count: 1,
      unit: '',
      name: ''
    }
  ],
  preparations: [
    {
      step: 1,
      stepDescription: ''
    }
  ],
  userId: ''
}

export function storeRecipe ({ getters, commit, dispatch }) {
  (async () => {
    try {
      var currentUser = await Amplify.Auth.currentAuthenticatedUser()
      commit('setUserId', currentUser.attributes.sub)
      commit('setImageId', 'statics/images/food-1932466_640.jpg')
      var recipeCreate = getters['recipeCreate']
      // TODO URL have to configure in a central place is temporaryly a fix value for prototyping
      let response = await axios.post('http://localhost:8080/recipes', recipeCreate)
      dispatch('resetCreateRecipe')
      this.$router.push({ path: '/recipe/' + response.data })
    } catch (error) {
      createNotify(error)
    }
  })()
}

export function uploadRecipeImage (context, files) {
  let uploadData = new FormData()
  uploadData.append('file', files[0])
  // Promise is needed because QUploader wants to returned a Promise
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:4444/upload', uploadData, {
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
      context.commit('setRecipe', response.data)
    } catch (error) {
      mockRecipe(context)
    }
  })()
}

export function mockRecipe (context) {
  context.commit('setRecipe', recipe)
}

export function deleteRecipe (context, recipeId) {
  ;(async () => {
    try {
      // TODO URL have to configure in a central place is temporaryly a fix value for prototyping
      await axios.delete('http://localhost:8080/recipes/' + recipeId)
      this.$router.push({ path: '/myRecipes' })
    } catch (error) {
      createNotify(error)
    }
  })()
}

export function editRecipe ({ getters, commit }, recipeId) {
  commit('setIsEditRecipe', true)
  commit('setRecipeCreate', getters['recipe'])
  this.$router.push('/recipe')
}

export function resetCreateRecipe ({ commit }) {
  commit('setRecipeCreate', emptyRecipeCreate)
}

export function updateRecipe ({ getters, commit, dispatch }) {
  (async () => {
    try {
      var recipeCreate = getters['recipeCreate']
      // TODO URL have to configure in a central place is temporaryly a fix value for prototyping
      var recipe = getters['recipe']
      await axios.patch('http://localhost:8080/recipes/' + recipe.recipeId, recipeCreate)
      commit('setIsEditRecipe', false)
      dispatch('resetCreateRecipe')
      this.$router.push({ path: '/recipe/' + recipe.recipeId })
    } catch (error) {
      createNotify(error)
    }
  })()
}

function createNotify (error) {
  Notify.create({
    message: error,
    color: 'negative',
    icon: 'report_problem',
    position: 'center'
  })
}
