<template>
  <q-layout view="hHh lpr fff">
    <q-header
      elevated
      class="bg-lime-8 text-grey-9"
    >
      <q-toolbar>
        <q-toolbar-title>Cookma - The social Cooking App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="row">
        <div class="col-md bg-grey-3"></div>
        <div
          class="col-md bg-grey-3 self-center"
          style="max-width: 500px;"
        >
          <router-view />
        </div>
        <div class="col-md bg-grey-3"></div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
