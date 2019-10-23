<template>
  <div>
    <div v-for="(ingredient, index) in ingredients" :key="index">
      <div class="row q-gutter-md">
        <div class="col-1">
          <q-input v-model="ingredient.count" type="number" label="Menge" />
        </div>
        <div class="col-2">
          <q-select
            v-model="ingredient.unit"
            label="Einheit"
            :options="['g', 'kg', 'St.']"
          />
        </div>
        <div class="col">
          <q-input v-model="ingredient.name" label="Zutat" />
        </div>
        <div class="col-3">
          {{ ingredients.indexOf(ingredient) }}
          <q-btn
            :id="index"
            flat
            round
            color="red-10"
            icon="delete"
            class="q-mt-sm"
            @click="removeIngredient(index)"
          />
        </div>
      </div>
    </div>

    <div class="q-pt-lg">
      <q-btn color="lime-9" label="Zutat hinzufügen" @click="addIngredient" />
    </div>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      ingredients: [{
        count: 1,
        unit: '',
        name: ''
      }]
    }
  },
  methods: {
    addIngredient () {
      console.log('Add Ingredient')
      this.ingredients.push({
        count: 1,
        unit: '',
        name: ''
      })
    },
    removeIngredient (index) {
      this.ingredients.splice(index, 1)
      console.log(index)
    }
  }

}
</script>
