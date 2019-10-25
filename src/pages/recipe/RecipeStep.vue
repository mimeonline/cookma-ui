<template>
  <div>
    <div class="row">
      <div class="col">
        <q-input v-model="name" label="Rezeptname" filled hint="Der Titel des Gerichts z.B. Feldsalat mit Balsamico-Vinaigrette"/>
      </div>
    </div>
    <div class="row q-pt-md">
      <div class="col">
        <q-input v-model="description" label="Beschreibung" autogrow filled hint="Erzähle etwas über Dein Gericht z.B. Was für ein kulinarischer Genuss" />
      </div>
    </div>
    <div class="row q-pt-md">
      <div class="col">
        <q-select
          v-model="expense"
          :options="['Leicht', 'Mittel', 'Schwer']"
          label="Aufwand"
          filled
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
          filled
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
          filled
        />
      </div>
    </div>
    <div class="row q-pt-md">
      <div class="col">
        <q-input
          v-model="preparation"
          label="Zubereitungszeit in Minuten"
          type="number"
          filled
        />
      </div>
      <div class="col q-pl-md">
        <q-input
          v-model="cooking"
          label="Koch-/Backzeit"
          type="number"
          filled
        />
      </div>
      <div class="col q-pl-md">
        <q-input
          v-model="rest"
          label="Ruhezeit in Minuten"
          type="number"
          filled
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
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
