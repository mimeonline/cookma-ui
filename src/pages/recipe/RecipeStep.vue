<template>
  <div>
    <div class="row">
      <div class="col">
        <q-input v-model="name" label="Rezeptname" />
      </div>
    </div>
    <div class="row q-pt-md">
      <div class="col">
        <q-input v-model="description" label="Beschreibung" autogrow />
      </div>
    </div>
    <div class="row q-pt-md">
      <div class="col">
        <q-select
          v-model="expense"
          :options="['Leicht', 'Mittel', 'Schwer']"
          label="Aufwand"
        />
      </div>
      <div class="col q-pl-md">
        <q-select
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
          v-model="preparation"
          label="Zubereitungszeit in Minuten"
          type="number"
        />
      </div>
      <div class="col q-pl-md">
        <q-input v-model="cooking" label="Koch-/Backzeit" type="number" />
      </div>
      <div class="col q-pl-md">
        <q-input v-model="rest" label="Ruhezeit in Minuten" type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  // name: 'PageName',
  computed: {
    ...mapFields('recipe', [
      'recipe.name',
      'recipe.description',
      'recipe.expense',
      'recipe.category',
      'recipe.nutritionForm',
      'recipe.times.preparation',
      'recipe.times.cooking',
      'recipe.times.rest'
    ])
  }
}
</script>
