<template>
  <q-page>
    <div class="row">
      <div class="col-md"></div>
      <div class="col-md self-center" style="max-width: 500px;">
        <div class="row">
          <RecipeName></RecipeName>
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
      </div>
      <div class="col-md"></div>
    </div>
  </q-page>
</template>

<script>
import Card from './Card.vue'
import RecipeName from './RecipeName'

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
    RecipeName
  }
}
</script>

<style lang="sass" scoped>
</style>
