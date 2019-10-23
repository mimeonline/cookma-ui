<template>
  <div>
    <div v-for="(ingredient, index) in ingredients" :key="index" >
      <div class="row q-gutter-md q-pt-md">
        <div class="col-1">
          <q-input v-model="ingredient.count" type="number" label="Menge" filled/>
        </div>
        <div class="col-2">
          <q-select
            v-model="ingredient.unit"
            label="Einheit"
            :options="['g', 'kg', 'St.']"
            filled
          />
        </div>
        <div class="col">
          <q-input v-model="ingredient.name" label="Zutat" filled/>
        </div>
        <div class="co self-end">
          <q-btn
            :id="index"
            flat
            round
            color="red-10"
            icon="delete"
            @click="removeIngredient(index)"
          />
        </div>
      </div>
    </div>

    <div class="q-pt-lg">
      <q-btn color="grey-6" label="Zutat hinzufügen" @click="addIngredient" />
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
