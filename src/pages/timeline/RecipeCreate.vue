<template>
  <q-page>
    <div class="row">
      <div class="col-md"></div>
      <div class="col-md-5 self-center">
        <q-card class="q-mt-lg full-width ">
          <q-card-section class="bg-lime-3">
            <span class="text-weight-medium">Rezepteingabe</span>
          </q-card-section>

          <q-card-section class="full-width ">
            <q-stepper v-model="step" ref="stepper" animated flat header-nav>
              <q-step
                :name="1"
                title="Rezept"
                icon="fas fa-book"
                active-color="lime-9"
                done-color="lime-9"
                :done="step > 1"
              >
                <div>
                  <div class="col">
                    <q-input outlined v-model="name" label="Rezeptname" />
                  </div>
                </div>
                <div class="row q-pt-md">
                  <div class="col">
                    <q-input
                      outlined
                      v-model="description"
                      label="Beschreibung"
                      autogrow
                    />
                  </div>
                </div>
                <div class="row q-pt-md">
                  <div class="col">
                    <q-select
                      outlined
                      v-model="expense"
                      :options="['Leicht', 'Mittel', 'Schwer']"
                      label="Aufwand"
                    />
                  </div>
                  <div class="col q-pl-md">
                    <q-select
                      outlined
                      v-model="category"
                      :options="[
                        'Vorspeise',
                        'Hauptspeise',
                        'Dessert',
                        'Snack',
                        'Frühstück'
                      ]"
                      label="Kategorie"
                    />
                  </div>
                  <div class="col q-pl-md">
                    <q-select
                      outlined
                      v-model="nutritionForm"
                      :options="[
                        'Vegetarisch',
                        'Vegan',
                        'Zuckerfrei',
                        'Lacktosefrei',
                        'Glutenfrei',
                        'Keto',
                        'Paelo',
                        'Lowcarb'
                      ]"
                      label="Ernährung"
                    />
                  </div>
                </div>
                <div class="row q-pt-md">
                  <div class="col">
                    <q-input
                      outlined
                      v-model="preparation"
                      label="Zubereitungszeit in Minuten"
                      type="number"
                    />
                  </div>
                  <div class="col q-pl-md">
                    <q-input
                      outlined
                      v-model="cooking"
                      label="Koch-/Backzeit"
                      type="number"
                    />
                  </div>
                  <div class="col q-pl-md">
                    <q-input
                      outlined
                      v-model="rest"
                      label="Ruhezeit in Minuten"
                      type="number"
                    />
                  </div>
                </div>
              </q-step>

              <q-step
                :name="2"
                title="Foto"
                icon="fas fa-image"
                color="lime-7"
                active-color="lime-8"
                done-color="lime-9"
                :done="step > 2"
              >
                An ad group contains one or more ads which target a shared set
                of keywords.
              </q-step>

              <q-step
                :name="3"
                title="Zutaten"
                icon="fas fa-carrot"
                color="lime-7"
                active-color="lime-8"
                done-color="lime-9"
                :done="step > 3"
              >
                An ad group contains one or more ads which target a shared set
                of keywords.
              </q-step>

              <q-step
                :name="4"
                title="Zubereitung"
                icon="fas fa-utensil-spoon"
                color="lime-7"
                active-color="lime-8"
                done-color="lime-9"
              >
                An ad group contains one or more ads which target a shared set
                of keywords.
              </q-step>

              <template v-slot:navigation>
                <q-stepper-navigation>
                  <q-toolbar>
                    <q-btn
                      v-if="step > 1"
                      flat
                      color="lime-9"
                      @click="$refs.stepper.previous()"
                      label="zurück"
                      class="q-ml-sm"
                    />
                    <q-space />
                    <q-btn
                      @click="$refs.stepper.next()"
                      color="lime-9"
                      :label="step === 4 ? 'speichern' : 'weiter'"
                    />
                  </q-toolbar>
                </q-stepper-navigation>
              </template>
            </q-stepper>
          </q-card-section>

          <q-card-section class="bg-lime-3">
            <div class="q-pt-md">
              <q-icon name="fas fa-question" />
              <span class="text-weight-small">
                Hast Du Fragen zur Rezepteingabe?</span
              >
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md"></div>
    </div>
  </q-page>
</template>

<script>

import { mapFields } from 'vuex-map-fields'

export default {
  // name: 'PageName',
  data () {
    return {
      step: 1
    }
  },
  computed: {
    ...mapFields('timeline', [
      'recipe.name',
      'recipe.description',
      'recipe.expense',
      'recipe.category',
      'recipe.nutritionForm',
      'recipe.times.preparation',
      'recipe.times.cooking',
      'recipe.times.rest'
    ]),
    recipe () {
      return this.$store.getters['timeline/recipeCreate']
    }
  }
}
</script>
