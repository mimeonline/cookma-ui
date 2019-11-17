<template>
  <div class="c-step-body">
    <div class="row">
      <div class="col">
        <q-input
          v-model="name"
          label="Rezeptname"
          filled
          hint="Der Titel des Gerichts z.B. Feldsalat mit Balsamico-Vinaigrette"
        />
      </div>
    </div>
    <div class="row q-pt-xs-lg q-pt-sm-md">
      <div class="col">
        <q-input
          v-model="description"
          label="Beschreibung"
          autogrow
          filled
          hint="Erzähle etwas über Dein Gericht z.B. Was für ein kulinarischer Genuss"
        />
      </div>
    </div>
    <div class="row q-pt-xs-lg q-pt-sm-md">
      <div class="col-xs-12 col-sm q-pt-sm-xs">
        <q-select v-model="expense" :options="['Leicht', 'Mittel', 'Schwer']" label="Aufwand" filled>
          <template v-slot:before>
            <q-icon name="fas fa-exclamation" color="lime-9" />
          </template>
        </q-select>
      </div>
      <div class="col-xs-12 col-sm q-pt-xs-md q-pt-sm-xs q-pl-sm-md">
        <q-select
          v-model="meal"
          :options="['Vorspeise', 'Hauptspeise', 'Dessert', 'Snack', 'Frühstück', 'Getränk']"
          label="Mahlzeit"
          filled
        >
          <template v-slot:before>
            <q-icon name="fas fa-utensils" color="lime-9" />
          </template>
        </q-select>
      </div>
      <div class="col-xs-12 col-sm q-pt-xs-md q-pt-sm-xs q-pl-sm-md">
        <q-select
          v-model="nutritionForm"
          :options="['Vegetarisch', 'Vegan', 'Zuckerfrei', 'Lacktosefrei', 'Glutenfrei', 'Keto', 'Paelo', 'Lowcarb']"
          label="Ernährung"
          filled
        >
          <template v-slot:before>
            <q-icon name="fas fa-carrot" color="lime-9" />
          </template>
        </q-select>
      </div>
    </div>
    <div class="row q-pt-md">
      <div class="col">
        <q-input v-model="preparation" label="Zubereitungszeit" type="number" filled>
          <template v-slot:append>
            <q-icon name="access_time" color="lime-9">
              <q-tooltip>Zubereitungszeit</q-tooltip>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col q-pl-md">
        <q-input v-model="cooking" label="Koch-/Backzeit" type="number" filled>
          <template v-slot:append>
            <q-icon name="access_time" color="lime-9">
              <q-tooltip>Koch-/Backzeit</q-tooltip>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col q-pl-md">
        <q-input v-model="rest" label="Ruhezeit" type="number" filled>
          <template v-slot:append>
            <q-icon name="access_time" color="lime-9">
              <q-tooltip>Ruhezeit</q-tooltip>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields('recipe', [
      'recipeCreate.name',
      'recipeCreate.description',
      'recipeCreate.expense',
      'recipeCreate.meal',
      'recipeCreate.nutritionForm',
      'recipeCreate.times.preparation',
      'recipeCreate.times.cooking',
      'recipeCreate.times.rest'
    ])
  }
}
</script>
