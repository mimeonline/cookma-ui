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
  state.recipeCreate.user.userId = userId
}

export function setMyRecipes (state, recipes) {
  state.myRecipes = recipes
}

export function addIngredient (state, ingredient) {
  state.createRecipe.ingredients.push(ingredient)
}

export function removeIngredient (state, index) {
  state.createRecipe.ingredients.splice(index, 1)
}

export function addPreparation (state, Preparation) {
  state.createRecipe.preparations.push(Preparation)
}

export function removePreparation (state, index) {
  state.createRecipe.preparations.splice(index, 1)
}
