export default {
  recipeCreate: {
    name: '',
    description: '',
    images: [
      {
        position: 1,
        imageId: ''
      }
    ],
    expense: [''],
    meal: [''],
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
        step: 1,
        stepDescription: ''
      }
    ],
    userId: ''
  },
  recipe: {
    recipeId: '',
    name: '',
    description: '',
    images: [
      {
        position: 1,
        imageId: ''
      }
    ],
    expense: '',
    meal: [''],
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
        stepDescription: ''
      }
    ],
    userId: '',
    lastModificationDate: '',
    nutritionForm: [],
    rating: {
      valueRatings: 0,
      countRatings: 0
    },
    like: {
      valueLikes: 0,
      countLikes: 0
    },

    user: {
      userProfileId: '',
      userName: '',
      avatar: ''
    }
  }
}
