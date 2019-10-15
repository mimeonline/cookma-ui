<template>
  <q-page class="">
    <div class="row justify-center ">
      <div class="q-pa-lg col-auto ">
        <q-card class="my-card">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.pixabay.com/photo/2017/01/31/19/07/avatar-2026510_1280.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Spaghetti Bolognese</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Spaghetti_bolognese_pasta.jpg/1600px-Spaghetti_bolognese_pasta.jpg">

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>

        <q-card class="my-card q-mt-lg">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Schweinekrustenbraten mit Knödel</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Krustenbraten_mit_Dunkelbierso%C3%9Fe.jpg">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
