<template>
  <q-card class="q-mt-lg full-width ">
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
    <q-card-section v-if="isCreateRecipe">
      <router-link to="recipe">
        <q-btn color="lime-9" label="Rezept erstellen" class="full-width"
      /></router-link>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  // name: 'PageName',
  data () {
    return {
      isCreateRecipe: false
    }
  },
  computed: {
    ...mapFields('recipe', [
      'recipe.name'
    ]),
    recipe () {
      return this.$store.getters['recipe/recipe']
    }
  },
  methods: {
    addCreaterRecipeButton () {
      this.isCreateRecipe = true
    }
  }
}
</script>
