<template>
  <div class="c-step-body">
    <div class="q-pb-xs-lg q-pb-sm-xs" v-for="(ingredient, index) in ingredients" :key="index">
      <div class="row q-pt-md-md">
        <div class="col-xs-4 col-sm q-pr-xs-sm q-pt-sm-xs q-pr-sm-md" style="max-width:90px;">
          <q-input v-model="ingredient.count" type="number" label="Menge" filled />
        </div>
        <div class="col-xs-8 col-sm q-pt-sm-xs q-pr-sm-md" style="max-width: 160px;">
          <q-select v-model="ingredient.unit" label="Einheit" :options="['g', 'kg', 'St.']" filled>
            <template v-slot:prepend>
              <q-icon name="fas fa-weight" style="font-size: 0.8em;"/>
            </template>
          </q-select>
        </div>
        <div class="col-xs-12 col-sm q-pt-xs-sm q-pt-sm-xs">
          <q-input v-model="ingredient.name" label="Zutat" filled >
             <template v-slot:append>
              <q-btn :id="index" flat round color="red-10" icon="delete" @click="removeIngredient(index)" />
            </template>
          </q-input>
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
    ...mapMultiRowFields('recipe', ['recipeCreate.ingredients'])
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
