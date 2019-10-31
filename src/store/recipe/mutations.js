export function setRecipe (state, createRecipe) {
  state.createRecipe = createRecipe
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
