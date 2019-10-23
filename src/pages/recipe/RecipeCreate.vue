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
                <RecipeStep />
              </q-step>

              <q-step
                :name="2"
                title="Foto"
                icon="fas fa-image"
                color="lime-7"
                active-color="lime-8"
                done-color="lime-9"
                :done="step > 2"
                ><ImageStep />
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
                <IngrediantsStep />
              </q-step>

              <q-step
                :name="4"
                title="Zubereitung"
                icon="fas fa-utensil-spoon"
                color="lime-7"
                active-color="lime-8"
                done-color="lime-9"
              >
                <PreparationStep />
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
import RecipeStep from './RecipeStep'
import ImageStep from './ImageStep'
import IngrediantsStep from './IngrediantsStep'
import PreparationStep from './PreparationStep'

export default {

  // name: 'PageName',
  data () {
    return {
      step: 1
    }
  },
  components: {
    RecipeStep,
    ImageStep,
    IngrediantsStep,
    PreparationStep
  }
}
</script>
