import { myRecipes } from '../../statics/data/myRecipes'

export function mockMyRecipes (context) {
  context.commit('setMyRecipes', myRecipes)
}
