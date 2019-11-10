<template>
  <q-page padding>
    <div class="row justify-center q-gutter-lg q-pb-lg">
      <div
        class="col-3"
        style=" max-width: 300px;"
        v-for="(recipe, index) in myRecipes"
        :key="index"
      >
        <q-card>
          <router-link :to="'recipe/' + recipe.recipeId">
            <q-img :src="recipe.imageId" />
          </router-link>

          <q-card-section>
            {{ recipe.name }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  computed: {
    myRecipes () {
      return this.$store.getters['myrecipes/myRecipes']
    }
  },
  created () {
    this.$store.dispatch('myrecipes/mockMyRecipes')
  }
}
</script>

<style>
.c-card {
  max-width: 250px;
}
</style>
