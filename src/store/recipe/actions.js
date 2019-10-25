import { LocalStorage } from 'quasar'
import { axios } from 'boot/axios'

export function storeRecipe ({ getters }) {
  let recipes = LocalStorage.getItem('recipes')
  if (recipes) {
    recipes.push(getters.recipe)
    LocalStorage.set('recipes', recipes)
    console.log('Store Recipes')
  } else {
    LocalStorage.set('recipes', [getters.recipe])
    console.log('Store Recipe')
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
        console.log(res.data.file)
        resolve()
      })
      .catch(error => {
        console.log('Ann Error occured')
        reject(error)
      })
  })
}
