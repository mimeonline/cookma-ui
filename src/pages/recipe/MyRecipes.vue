<template>
  <q-page padding>
        <div class="row justify-center q-gutter-lg q-pb-lg">
          <div
            class="col-3"
            style=" max-width: 300px;"
            v-for="card in 11"
            :key="card"
          >
            <q-card>
              <q-img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Spaghetti_bolognese_pasta.jpg/1600px-Spaghetti_bolognese_pasta.jpg"
              />
              <q-card-section>Mein Rezept</q-card-section>
            </q-card>
          </div>
        </div>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
.c-card {
  max-width: 250px;
}
</style>
