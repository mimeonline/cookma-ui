<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-auto gt-sm"></div>
      <div class="col" style="max-width:1024px;">
        <div class="text-h3 text-lime-9 q-pt-md q-pl-md">Meine Rezepte</div>
        <div class="row" >
          <div
            class="col-xs-6 col-sm-4 col-md-3 q-pa-sm-md q-pa-xs-sm c-card"
            v-for="(recipe, index) in myRecipes.myRecipes"
            :key="index"
          >
            <q-card>
              <router-link :to="'/recipe/' + recipe.recipeId">
                <q-img :src="recipe.imageId" />
              </router-link>
              <q-card-section>
                {{ recipe.name }}
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-auto gt-sm"></div>
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
    // this.$store.dispatch('myrecipes/mockMyRecipes')
    this.$store.dispatch('myrecipes/fetchMyRecipes')
  }
}
</script>

<style>
.c-card {
  max-width: 300px;
}
</style>
