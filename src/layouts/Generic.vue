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

    <q-footer class="bg-white text-black">
      <div class="row q-py-lg justify-center">
        <div class="col-auto q-gutter-sm">
          <div class="text-weight-bold">About</div>
          <div><router-link to="aboutus">Über uns</router-link></div>
          <div><router-link to="contact">Kontakt</router-link></div>
        </div>
        <div class="col-auto q-pl-lg" style="width:100px;"><q-separator vertical style="margin:0 auto;"/></div>
        <div class="col-auto q-gutter-sm q-px-md">
          <div class="text-weight-bold">Daten</div>
          <div><router-link to="imprint">Impressum</router-link></div>
          <div>
            <router-link to="privacy">Datenschutzerklärung</router-link>
          </div>
          <div>
            <router-link to="usercondition">Nutzerbedingung</router-link>
          </div>
        </div>
        <div class="col-auto q-pr-md" style="width:100px;"><q-separator vertical style="margin:0 auto;"/></div>
        <div class="col-auto q-gutter-sm">
          <div class="text-weight-bold">Heute schon gekocht?</div>
          <div>Hole Dir inspirationen von zahlreichen leckeren Rezepten.</div>
          <div>Cookma &copy; 2019</div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
