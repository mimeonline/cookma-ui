<template>
  <div>
    <q-card class="q-mt-lg">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <q-img :src="card.user.avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-h6">
            {{ card.recipe.name }}
          </q-item-label>
          <q-item-label caption>von {{ card.user.name }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-img :src="card.recipe.image" />

      <q-card-section>
        <q-item top style="padding:0">
          <q-item-section top>
            <q-item-label>
              <q-rating
                :value="card.rating.value"
                size="1.5em"
                color="yellow"
                readonly
              />
              {{ card.rating.number }} Bewertungen
            </q-item-label>
            <q-item-label class="q-pt-md">
              <q-rating
                :value="card.like.value"
                size="1.5em"
                max="1"
                color="red-7"
                icon="favorite_border"
              />
              {{ card.like.number }}
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>
              <div class="column">
                <div class="col">
                  <q-icon name="fas fa-exclamation" color="grey" />
                  {{ card.recipe.effort }}
                </div>
                <div class="col q-pt-xs">
                  <q-icon name="fas fa-clock" color="grey" />
                  {{ card.recipe.times.preparation }} Min
                </div>
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-section>{{ card.recipe.description }}</q-card-section>
      <q-card-section>
        <q-separator />
      </q-card-section>
      <q-card-section>
        <q-input
          rounded
          outlined
          dense
          v-model="text"
          label="Kommentieren..."
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['card'],
  data () {
    return {
      text: '',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
