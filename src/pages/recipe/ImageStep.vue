<template>
  <div class="max-width justify-center" style="max-width: 500px">
    <q-uploader
      url="http://localhost:4444/upload"
      :factory="factoryFn"
      @finish="finished"
      @uploaded="fileUploaded"
      ref="uploader"
      label="Laden hier dein Bild hoch"
      color="grey-6"
      class="max-width"
    />
  </div>
</template>

<script>
export default {
  methods: {
    factoryFn (files) {
      console.log(files)

      // return this.$store.dispatch('recipe/uploadRecipeImage', files)

      return {
        url: 'http://localhost:4444/upload',
        method: 'POST'
      }
    },
    fileUploaded ({ files, xhr }) {
      console.log(JSON.parse(xhr.response))
    },
    finished () {
      this.$refs.uploader.reset()
    }
  }
}
</script>
