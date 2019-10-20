<template>
  <q-card class="q-mt-lg full-width ">
    <!-- <div class="bg-grey4"> -->
    <q-card-section class="bg-grey-4">
      <span class="text-weight-medium">Rezepteingabe</span>
    </q-card-section>
    <!-- </div> -->

    <q-card-section>
      <q-separator />
    </q-card-section>
    <q-card-section>
      <q-input borderless v-model="text" label="Was isst Du gerade?" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      text: ''
    }
  }
}
</script>
