<template>
  <q-page padding>
    <div class="self-center" style="max-width: 700px; margin:0 auto; ">
      <q-card>
        <q-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Spaghetti_bolognese_pasta.jpg/1600px-Spaghetti_bolognese_pasta.jpg"
        />
        <q-card-section class="text-h4 text-bold">
          {{ recipe.name }}
        </q-card-section>

        <q-card-section>
          <q-toolbar style="padding:0">
            <q-rating
              :value="recipe.rating.value"
              size="1.5em"
              color="yellow"
              readonly
            />
            {{ recipe.rating.count }} Bewertungen
            <q-rating
              :value="recipe.like.value"
              size="1.5em"
              max="1"
              color="lime-9"
              icon="favorite_border"
              class="q-pl-lg"
            />
            {{ recipe.like.count }}
            <q-space />
            <q-chip
              ripple
              clickable
              icon="bookmark"
              outline
              label="Speichern"
              color="lime-9"
            />
          </q-toolbar>
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
                {{ recipe.user.name }}
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
          <div class="row justify-center q-gutter-lg">
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
                  class="q-ma-md"
                >
                  <div class="column ">
                    <div class="col text-center">45</div>
                    <div class="col text-center">Min.</div>
                  </div>
                </q-knob>
              </div>
              <div class="text-center">Zubereitung</div>
            </div>
            <div class="col-auto">
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
                  class="q-ma-md"
                >
                  <div class="column text-center">
                    <div class="col ">0</div>
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
                  class="q-ma-md"
                >
                  <div class="column text-center">
                    <div class="col ">0</div>
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
          <div
            class="row"
            v-for="ingredient in recipe.ingredients"
            :key="ingredient.position"
          >
            <div class="col-auto q-px-lg">
              {{ ingredient.count }} {{ ingredient.unit }}
            </div>
            <div class="col">{{ ingredient.name }}</div>
          </div>
        </q-card-section>

        <q-card-section>
          <q-separator />
        </q-card-section>

        <q-card-section>
          <div class="text-h5">Zubereitung</div>

          <q-list>
            <q-item
              v-for="preparation in recipe.preparations"
              :key="preparation.step"
            >
              <q-item-section avatar>
                <q-avatar color="lime-9" text-color="white">
                  {{ preparation.step }}
                </q-avatar>
              </q-item-section>
              <q-item-section> {{ preparation.prepStep }}.</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  computed: {
    recipe () {
      return this.$store.getters['recipe/recipe']
    }
  }
}
</script>
