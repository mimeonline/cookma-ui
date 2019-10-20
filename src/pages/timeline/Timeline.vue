<template>
  <q-page>
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
    Card
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
