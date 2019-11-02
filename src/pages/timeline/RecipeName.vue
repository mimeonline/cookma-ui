<template>
  <q-card class="full-width ">
    <q-card-section class="bg-lime-3">
      <span class="text-weight-medium">Rezepteingabe</span>
    </q-card-section>

    <q-card-section>
      <q-separator />
    </q-card-section>
    <q-card-section>
      <q-input
        borderless
        v-model="name"
        @click="addCreaterRecipeButton"
        @keypress.enter="$router.push('recipe')"
        label="Was kochst Du gerade?"
      />
    </q-card-section>
    <q-card-section v-if="isRecipeCreate">
      <router-link to="recipe">
        <q-btn color="lime-9" label="Rezept erstellen" class="full-width"
      /></router-link>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  data () {
    return {
      isRecipeCreate: false
    }
  },
  computed: {
    ...mapFields('recipe', [
      'recipeCreate.name'
    ]),
    recipe () {
      return this.$store.getters['recipe/recipeCreate']
    }
  },
  methods: {
    addCreaterRecipeButton () {
      this.isRecipeCreate = true
    }
  }
}
</script>
