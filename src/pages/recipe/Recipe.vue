<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-auto q-pr-lg gt-sm">
        <q-list class="col-auto">
          <q-item clickable v-ripple to="/myrecipes">
            <q-item-section avatar>
              <q-avatar color="lime-9" text-color="white" icon="fas fa-utensils" />
            </q-item-section>
            <q-item-section>Meine Rezepte</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar color="lime-9" text-color="white" icon="fas fa-edit" />
            </q-item-section>
            <q-item-section>
              <span class="text-lime-9">Rezept ändern</span>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="deleteRecipe">
            <q-item-section avatar>
              <q-avatar color="lime-9" text-color="white" icon="fas fa-trash" />
            </q-item-section>
            <q-item-section>
              <span class="text-lime-9">Rezept löschen</span>
            </q-item-section>
          </q-item>

        </q-list>
      </div>

      <div class="col" style="max-width: 600px;">
        <q-card style="">
          <q-img :src="recipe.images[0].imageId" />
          <q-card-section class="text-h4 text-bold">
            {{ recipe.name }}
          </q-card-section>
          <q-card-section>
            <q-item style="padding: 0">
              <q-item-section avatar>
                <q-avatar>
                  <q-img :src="recipe.user.avatar" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  {{ recipe.user.userName }}
                </q-item-label>
                <q-item-label caption>
                  {{ recipe.description }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>

          <q-card-section>
            <q-separator />
          </q-card-section>

          <q-card-section>
            <div class="row items-center">
              <div class="col-auto text-h5 q-pr-lg">Aufwand</div>
              <div class="col">
                <q-icon name="fas fa-exclamation" color="lime-9" />
                {{ recipe.expense }}
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            <div class="row justify-center">
              <div class="col-auto">
                <div>
                  <q-knob
                    show-value
                    :min="0"
                    :max="60"
                    :value="recipe.times.preparation"
                    :thickness="0.13"
                    color="lime-9"
                    track-color="lime-2"
                    size="80px"
                    font-size="16px"
                    class="q-ma-sm q-ma-md-md"
                  >
                    <div class="column ">
                      <div class="col text-center">{{ recipe.times.preparation }}</div>
                      <div class="col text-center">Min.</div>
                    </div>
                  </q-knob>
                </div>
                <div class="text-center">Zubereitung</div>
              </div>
              <div class="col-auto q-px-sm-xl">
                <div>
                  <q-knob
                    show-value
                    :min="0"
                    :max="60"
                    :value="recipe.times.cooking"
                    :thickness="0.13"
                    color="lime-9"
                    track-color="lime-2"
                    size="80px"
                    font-size="16px"
                    class="q-ma-sm q-ma-md-md"
                  >
                    <div class="column text-center">
                      <div class="col ">{{ recipe.times.cooking }}</div>
                      <div class="col ">Min.</div>
                    </div>
                  </q-knob>
                </div>
                <div class="text-center">Back/Kochzeit</div>
              </div>
              <div class="col-auto">
                <div>
                  <q-knob
                    show-value
                    :in="0"
                    :max="60"
                    :value="recipe.times.rest"
                    :thickness="0.13"
                    color="lime-9"
                    track-color="lime-2"
                    size="80px"
                    font-size="16px"
                    class="q-ma-sm q-ma-md-md"
                  >
                    <div class="column text-center">
                      <div class="col ">{{ recipe.times.rest }}</div>
                      <div class="col ">Min.</div>
                    </div>
                  </q-knob>
                </div>
                <div class="text-center">Ruhezeit</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            <div class="text-h5">Zutaten</div>
            <div class="q-py-sm">Portionen: 2</div>
            <div class="row" v-for="ingredient in recipe.ingredients" :key="ingredient.position">
              <div class="col-auto q-px-lg">{{ ingredient.count }} {{ ingredient.unit }}</div>
              <div class="col">{{ ingredient.name }}</div>
            </div>
          </q-card-section>

          <q-card-section>
            <q-separator />
          </q-card-section>

          <q-card-section>
            <div class="text-h5">Zubereitung</div>

            <q-list>
              <q-item v-for="preparation in recipe.preparations" :key="preparation.step">
                <q-item-section avatar>
                  <q-avatar color="lime-9" text-color="white">
                    {{ preparation.step }}
                  </q-avatar>
                </q-item-section>
                <q-item-section> {{ preparation.stepDescription }}.</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-auto gt-sm q-pl-lg" style="max-width: 300px;">
        <q-card>
          <q-card-section class="text-weight-bold" style="font-size: 1.5em; text-align: center">
            Leidenschaft?
          </q-card-section>
          <q-separator />
          <q-card-section>
            Jeden Tag ein neues Gericht!
          </q-card-section>
        </q-card>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  computed: {
    recipe () {
      return this.$store.getters['recipe/recipe']
    }
  },
  created () {
    this.$store.dispatch('recipe/fetchRecipe', this.$route.params.recipId)
  },
  methods: {
    deleteRecipe () {
      this.$store.dispatch('recipe/deleteRecipe', this.$route.params.recipId)
    }
  }
}
</script>
