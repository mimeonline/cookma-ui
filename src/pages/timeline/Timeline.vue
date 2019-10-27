<template>
  <q-page>
    <div class="row justify-center">

      <div class="col-md gt-sm">
        <div class="row">
          <div class="col "></div>
          <div class="col-auto q-pa-lg" style="max-width: 280px">

            <q-list>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="lime-9" text-color="white" icon="fas fa-utensils" />
                </q-item-section>
                <q-item-section>
                  <router-link to="recipe/myrecipes">Meine Rezepte</router-link>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="lime-9" text-color="white" icon="fas fa-book" />
                </q-item-section>
                <q-item-section>Meine Kochbücher</q-item-section>
              </q-item>
            </q-list>

          </div>
        </div>
      </div>

      <div
        class="col-md-auto self-center q-pa-xs-md q-pa-sm-none q-pt-sm-lg"
        style="max-width: 500px;"
      >
        <div class="row">
          <RecipeName />
        </div>
        <div class="row justify-center">
          <div
            class="col-auto full-width"
            v-for="card in timelineCards"
            :key="card.recipe.id"
          >
            <Card :card="card" />
          </div>
        </div>
      </div>

      <div class="col-md gt-sm">
        <div class="row">
          <div class="col-auto q-pa-lg" style="max-width: 300px;">
            <q-card>
              <q-card-section class="text-weight-bold" style="font-size: 1.5em; text-align: center">Warum?</q-card-section>
              <q-separator />
              <q-card-section>
                Weil Kochen Leidenschaft ist!
              </q-card-section>
            </q-card>
            <div class="q-pt-md">

              <router-link to="/imprint">Immpressum</router-link> |
              <router-link to="contact">Kontakt</router-link> |
              <router-link to="aboutus">Über uns</router-link> |
              <router-link to="privacy">Datenschutzerklärung</router-link> |
              <router-link to="usercondition">Nutzerbedingung</router-link>
            </div>
            <div>
              Cookma &copy; 2019
            </div>

          </div>
          <div class="col"></div>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
import Card from './Card.vue'
import RecipeName from '../timeline/RecipeName'

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
