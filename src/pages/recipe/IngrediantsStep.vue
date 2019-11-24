<template>
  <div class="c-step-body">
    <div class="q-pb-xs-lg q-pb-sm-xs" v-for="(ingredient, index) in $v.ingredients.$each.$iter" :key="index">
      <div class="row q-pt-md-md">
        <div class="col-xs-4 col-sm q-pr-xs-sm q-pt-sm-xs q-pr-sm-md" style="max-width:90px;">
          <q-input
            v-model="ingredient.count.$model"
            :error="ingredient.count.$error"
            type="number"
            label="Menge"
            filled
          />
        </div>
        <div class="col-xs-8 col-sm q-pt-sm-xs q-pr-sm-md" style="max-width: 160px;">
          <q-select
            v-model="ingredient.unit.$model"
            :error="ingredient.unit.$error"
            label="Einheit"
            :options="['g', 'kg', 'St.']"
            filled
          >
            <template v-slot:prepend>
              <q-icon name="fas fa-weight" color="lime-9" style="font-size: 0.7em;" />
            </template>
          </q-select>
        </div>
        <div class="col-xs-12 col-sm q-pt-xs-sm q-pt-sm-xs">
          <q-input
            v-model="ingredient.name.$model"
            label="Zutat"
            filled
            error-message="Bitte eine Zutat eingeben."
            :error="ingredient.name.$error"
          >
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
import { minLength, required } from 'vuelidate/lib/validators'

export default {
  validations () {
    return {
      ingredients: {
        required,
        minLength: minLength(1),
        $each: {
          count: {
            required
          },
          unit: {
            required
          },
          name: {
            required,
            minLength: minLength(3)
          }
        }
      }
    }
  },
  computed: {
    ...mapMultiRowFields('recipe', ['recipeCreate.ingredients'])
  },
  methods: {
    addIngredient () {
      this.$store.commit('recipe/addIngredient', {
        position: 1,
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
