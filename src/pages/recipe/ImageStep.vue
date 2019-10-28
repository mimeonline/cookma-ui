<template>
  <div class="c-step-body">
    <q-uploader
      url="http://localhost:4444/upload"
      :factory="factoryFn"
      @finish="finished"
      @uploaded="fileUploaded"
      ref="uploader"
      label="Klick den Plus Button oder ziehe ein Bild in das Feld"
      color="grey-6"
      class="full-width"
      style="height:500px;"
    />
  </div>
</template>

<script>
export default {
  methods: {
    factoryFn (files) {
      // return this.$store.dispatch('recipe/uploadRecipeImage', files)

      return {
        url: 'http://localhost:4444/upload',
        method: 'POST'
      }
    },
    fileUploaded ({ files, xhr }) {
      // console.log(JSON.parse(xhr.response))
    },
    finished () {
      this.$refs.uploader.reset()
    }
  }
}
</script>
