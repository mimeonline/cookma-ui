export function addIngredient (state, ingredient) {
  state.recipe.ingredients.push(ingredient)
}

export function removeIngredient (state, index) {
  state.recipe.ingredients.splice(index, 1)
}

export function addPreparation (state, Preparation) {
  state.recipe.preparations.push(Preparation)
}

export function removePreparation (state, index) {
  state.recipe.preparations.splice(index, 1)
}
