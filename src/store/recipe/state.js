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
    recipeId: '38d12f30-d305-4864-a6b0-1f42f2e49547',
    name: 'Spaghetti Bolognese',
    description: 'Ein absoluter Genuß',
    expense: 'Mittel',
    category: [],
    nutritionForm: [],
    rating: {
      value: 3,
      count: 10
    },
    like: {
      value: 1,
      count: 930
    },
    times: {
      preparation: 45,
      cooking: 0,
      rest: 0
    },
    ingredients: [
      {
        position: 1,
        count: '300',
        unit: 'g',
        name: 'Pasta'
      },
      {
        position: 2,
        count: '400',
        unit: 'g',
        name: 'Tomaten'
      }
    ],
    preparations: [
      {
        step: 1,
        prepStep: 'Mache nun folgendes.....'
      },
      {
        step: 2,
        prepStep: 'Und weiter geht es mit diesem Schritt.....'
      }
    ],
    user: {
      userId: 'd393bb48-dd7d-4826-94b9-80df18246f4c',
      name: 'Michael',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/19/07/avatar-2026510_1280.png'
    }
  }
}
