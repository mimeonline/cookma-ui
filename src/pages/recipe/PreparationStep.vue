<template>
  <div>
    <div v-for="(preparation, index) in preparations" :key="index" >
      <div class="row q-pt-md">
        <div class="col">
          <q-input filled v-model="preparation.prepStep" type="textarea" :label="`Schritt ${index+1}`"  />
        </div>
        <div class="co self-end">
          <q-btn
            :id="index"
            flat
            round
            color="red-10"
            icon="delete"
            @click="removePreparation(index)"
          />
        </div>
      </div>
    </div>

    <div class="q-pt-lg">
      <q-btn color="grey-6" label="Schritt hinzufügen" @click="addPreparation" />
    </div>
  </div>
</template>

<script>
import { mapMultiRowFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapMultiRowFields('recipe', [
      'recipe.preparations'
    ])
  },
  methods: {
    addPreparation () {
      this.$store.commit('recipe/addPreparation', {
        prepStep: ''
      })
    },
    removePreparation (index) {
      this.$store.commit('recipe/removePreparation', index)
    }
  }
}
</script>
