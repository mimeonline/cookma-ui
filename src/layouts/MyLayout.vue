<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated class="bg-lime-7 text-grey-9">
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/" style="text-decoration: none">
            Cookma - The social Cooking App
          </router-link>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-grey-3">
      <router-view />
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
