<template>
  <div>
    <q-card class="q-mt-lg">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <!-- <q-img :src="timelineRecipe.user.avatarId" /> -->
            <q-img src="https://cdn.pixabay.com/photo/2017/01/31/19/07/avatar-2026510_1280.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6">
            {{ timelineRecipe.recipe.recipeName }}
          </q-item-label>
          <q-item-label caption>von {{ timelineRecipe.user.userName }}</q-item-label>
        </q-item-section>
      </q-item>

      <router-link :to="'recipe/' + timelineRecipe.recipe.recipeId">
        <q-img :src="timelineRecipe.recipe.imageId" />
      </router-link>

      <q-card-section>
        <q-item top style="padding:0">
          <q-item-section top>
            <q-item-label>
              <!-- <q-rating :value="card.rating.value" size="1.5em" color="yellow" readonly /> -->
              <q-rating :value="3" size="1.5em" color="yellow" readonly />
              <!-- {{ card.rating.number }} Bewertungen -->
              31 Bewertungen
            </q-item-label>
            <q-item-label class="q-pt-md">
              <!-- <q-rating :value="card.like.value" size="1.5em" max="1" color="red-7" icon="favorite_border" />
              {{ card.like.number }} -->

              <q-rating :value="1" size="1.5em" max="1" color="red-7" icon="favorite_border" />
              25
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>
              <div class="column">
                <div class="col">
                  <q-icon name="fas fa-exclamation" color="grey" />
                  {{ timelineRecipe.recipe.expense }}
                </div>
                <div class="col q-pt-xs">
                  <q-icon name="fas fa-clock" color="grey" />
                  {{ timelineRecipe.recipe.time }} Min
                </div>
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-section>{{ timelineRecipe.recipe.description }}</q-card-section>

      <q-card-section>
        <q-separator />
      </q-card-section>

      <q-card-section>
        <q-input rounded outlined dense v-model="text" label="Kommentieren..." />
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
export default {
  props: ['timelineRecipe'],
  data () {
    return {
      text: ''
    }
  }
}
</script>
