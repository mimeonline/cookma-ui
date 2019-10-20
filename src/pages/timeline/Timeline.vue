<template>
  <q-page>
    <div class="row">
      <RecipeCreate></RecipeCreate>
    </div>

    <div class="row justify-center">
      <div
        class="col-auto full-width"
        v-for="card in timelineCards"
        :key="card.recipe.id"
      >
        <card :card="card"></card>
      </div>
    </div>
  </q-page>
</template>

<script>
import Card from './Card.vue'
import RecipeCreate from './RecipeCreate'

export default {
  name: 'Timeline',
  computed: {
    timelineCards () {
      return this.$store.getters['timeline/timelineCards']
    }
  },
  created () {
    this.$store.dispatch('timeline/timelineCards')
  },
  components: {
    Card,
    RecipeCreate
  }
}
</script>

<style lang="sass" scoped>
</style>
