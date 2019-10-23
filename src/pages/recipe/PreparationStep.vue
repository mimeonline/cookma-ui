<template>
  <div>
    <div v-for="(preparation, index) in preparations" :key="index" >
      <div class="row q-pt-md">
        <div class="col">
          <q-input filled v-model="preparation.prep" type="textarea" :label="`Schritt ${index+1}`"  />
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
export default {
  // name: 'PageName',
  data () {
    return {
      preparations: [{
        prep: ''
      }]
    }
  },
  methods: {
    addPreparation () {
      this.preparations.push({
        count: 1,
        unit: '',
        name: ''
      })
    },
    removePreparation (index) {
      this.preparations.splice(index, 1)
      console.log(index)
    }
  }
}
</script>
