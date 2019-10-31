export default {
  timelineCards: [
    {
      user: {
        userId: '',
        name: '',
        avatar: ''
      },
      recipe: {
        recipeId: '',
        name: '',
        description: '',
        image: '',
        times: {
          preparation: 0
        },
        effort: ''
      },
      rating: {
        value: 0,
        number: 0
      },
      like: {
        value: 0,
        number: 0
      },
      created: ''
    }
  ],
  recipe: {
    name: '',
    description: '',
    expense: [],
    category: [],
    nutritionForm: [],
    times: {
      preparation: 0,
      cooking: 0,
      rest: 0
    }
  },
  counter: 1
}
