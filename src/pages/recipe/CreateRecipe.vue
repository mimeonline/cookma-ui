<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-md gt-sm"></div>
      <div class="col-md-6 self-center q-pa-xs-md q-pa-sm-none q-pt-sm-lg">
        <q-card>
          <q-card-section class="bg-lime-3">
            <span class="text-weight-medium">Rezepteingabe</span>
          </q-card-section>

          <q-card-section>
            <q-stepper v-model="step" ref="stepper" animated flat :contracted="$q.screen.lt.sm" >
              <q-step
                :name="1"
                title="Rezept"
                icon="fas fa-book"
                prefix="A"
                active-color="lime-9"
                done-color="lime-9"
                :done="step > 1 && !isRecipeError"
                :error="isRecipeError"
              >
                <RecipeStep ref="recipe" />
              </q-step>

              <q-step
                :name="2"
                title="Foto"
                icon="fas fa-image"
                color="lime-7"
                active-color="lime-8"
                done-color="lime-9"
                :done="step > 2"
                disable
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
                :error="isIngredientsError"
              >
                <IngrediantsStep ref="ingrediants" />
              </q-step>

              <q-step
                :name="4"
                title="Zubereitung"
                icon="fas fa-utensil-spoon"
                color="lime-7"
                active-color="lime-8"
                done-color="lime-9"
                :error="isPreparationsError"
              >
                <PreparationStep ref="preparations" />
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
                      @click="nextStepOrSaveRecipe(step)"
                      color="lime-9"
                      :disable="isDisableSave"
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
              <span class="text-weight-small"> Hast Du Fragen zur Rezepteingabe?</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md gt-sm"></div>
    </div>
  </q-page>
</template>

<script>
import RecipeStep from './RecipeStep'
import ImageStep from './ImageStep'
import IngrediantsStep from './IngrediantsStep'
import PreparationStep from './PreparationStep'

export default {
  data () {
    return {
      step: 1,
      isRecipeError: false,
      isIngredientsError: false,
      isPreparationsError: false
    }
  },
  components: {
    RecipeStep,
    ImageStep,
    IngrediantsStep,
    PreparationStep
  },
  computed: {
    isDisableSave () {
      return this.step === 4 && (this.isRecipeError || this.isIngredientsError || this.isPreparationsError)
    }
  },
  methods: {
    nextStepOrSaveRecipe (step) {
      if (step === 1) {
        this.isRecipeError = this.$refs.recipe.$v.$invalid
      }
      if (step === 3) {
        this.isIngredientsError = this.$refs.ingrediants.$v.$invalid
      }
      if (step === 4) {
        this.isPreparationsError = this.$refs.preparations.$v.$invalid
        if (this.$store.getters['recipe/isEditRecipe']) {
          this.$store.dispatch('recipe/updateRecipe')
        } else {
          this.$store.dispatch('recipe/storeRecipe')
        }
      } else {
        this.$refs.stepper.next()
      }
    }
  }
}
</script>
