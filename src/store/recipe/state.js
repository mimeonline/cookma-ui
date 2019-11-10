export default {
  recipeCreate: {
    recipeId: '',
    name: '',
    description: '',
    expense: [''],
    category: [''],
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
        prepStep: ''
      }
    ],
    user: {
      userId: ''
    }
  },
  recipe: {
    recipeId: '',
    name: '',
    description: '',
    image: '',
    expense: '',
    category: [],
    nutritionForm: [],
    rating: {
      value: 0,
      count: 0
    },
    like: {
      value: 0,
      count: 0
    },
    times: {
      preparation: 0,
      cooking: 0,
      rest: 0
    },
    ingredients: [
      {
        position: 1,
        count: '',
        unit: '',
        name: ''
      }
    ],
    preparations: [
      {
        step: 1,
        prepStep: ''
      }
    ],
    user: {
      userId: '',
      name: '',
      avatar: ''
    }
  }
}
