<template>
  <div  class="c-step-body">
    <div v-for="(ingredient, index) in ingredients" :key="index" >

      <div class="row q-pt-md-md">
        <div class="col-xs-2 col" style="max-width: 70px;">
          <q-input v-model="ingredient.count" type="number" label="Menge" filled/>
        </div>
        <div class="col-2 q-pl-xs-xs q-pl-md-md" style="max-width: 130px;">
          <q-select
            v-model="ingredient.unit"
            label="Einheit"
            :options="['g', 'kg', 'St.']"
            filled
          />
        </div>
        <div class="col  q-pl-xs-xs q-pl-md-md">
          <q-input v-model="ingredient.name" label="Zutat" filled/>
        </div>
        <div class="col-auto self-end">
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
import { mapMultiRowFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapMultiRowFields('recipe', [
      'recipe.ingredients'
    ])
  },
  methods: {
    addIngredient () {
      this.$store.commit('recipe/addIngredient', {
        count: 1,
        unit: '',
        name: ''
      })
    },
    removeIngredient (index) {
      this.$store.commit('recipe/removeIngredient', index)
    }
  }
}
</script>
