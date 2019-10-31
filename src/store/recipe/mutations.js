export function setCreateRecipe (state, createRecipe) {
  state.createRecipe = createRecipe
}

export function setRecipe (state, recipe) {
  state.recipe = recipe
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
