export function setRecipeCreate (state, recipeCreate) {
  state.recipeCreate = recipeCreate
}

export function setRecipe (state, recipe) {
  state.recipe = recipe
}

export function setRecipeId (state, recipeId) {
  state.recipeCreate.recipeId = recipeId
}

export function setUserId (state, userId) {
  state.recipeCreate.userId = userId
}

export function addIngredient (state, ingredient) {
  ingredient.position = state.recipeCreate.ingredients.length + 1
  state.recipeCreate.ingredients.push(ingredient)
}

export function removeIngredient (state, index) {
  state.recipeCreate.ingredients.splice(index, 1)
}

export function addPreparation (state, preparation) {
  preparation.step = state.recipeCreate.preparations.length + 1
  state.recipeCreate.preparations.push(preparation)
}

export function removePreparation (state, index) {
  state.recipeCreate.preparations.splice(index, 1)
}

export function setImageId (state, imageId) {
  state.recipeCreate.images[0].imageId = imageId
}

export function setIsEditRecipe (state, isEdit) {
  state.isEditRecipe = isEdit
}
