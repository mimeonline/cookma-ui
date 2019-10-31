export default {
  createRecipe: {
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
    ]
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
  },
  myRecipes: [
    {
      recipeId: '38d12f30-d305-4864-a6b0-1f42f2e49547',
      name: 'Spaghetti Bolognese',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Spaghetti_bolognese_pasta.jpg/1600px-Spaghetti_bolognese_pasta.jpg'
    }
  ]
}
