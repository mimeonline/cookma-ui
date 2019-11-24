<template>
  <div class="c-step-body">
    <div v-for="(preparation, index) in $v.preparations.$each.$iter" :key="index">
      <div class="row q-pt-xs-xs q-pt-sm-md">
        <div class="col">
          <q-input
            filled
            v-model="preparation.stepDescription.$model"
            :error="preparation.stepDescription.$error"
            type="textarea"
            :label="`Schritt ${parseInt(index)+1}`"
          >
            <template v-slot:append>
              <q-btn :id="index" flat round color="red-10" icon="delete" @click="removePreparation(index)" />
            </template>
          </q-input>
        </div>
      </div>
    </div>

    <div class="q-pt-lg">
      <q-btn color="grey-6" label="Schritt hinzufügen" @click="addPreparation" />
    </div>
  </div>
</template>

<script>
import { mapMultiRowFields } from 'vuex-map-fields'
import { minLength, required } from 'vuelidate/lib/validators'

export default {
  validations () {
    return {
      preparations: {
        required,
        minLength: minLength(1),
        $each: {
          stepDescription: {
            required,
            minLength: minLength(3)
          }
        }
      }
    }
  },
  computed: {
    ...mapMultiRowFields('recipe', ['recipeCreate.preparations'])
  },
  methods: {
    addPreparation () {
      this.$store.commit('recipe/addPreparation', {
        step: 1,
        stepDescription: ''
      })
    },
    removePreparation (index) {
      this.$store.commit('recipe/removePreparation', index)
    }
  }
}
</script>
