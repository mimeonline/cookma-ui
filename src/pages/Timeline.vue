<template>
  <q-page>
    <div class="row justify-center ">
      <div
        class="col-auto "
        v-for="card in timelineCards"
        :key="card.recipe.id"
      >

        <q-card class="my-card q-mt-lg">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <q-img :src="card.user.avatar" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ card.recipe.name }}</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>
          </q-item>
          <q-img :src="card.recipe.image" />

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
  name: 'Timeline',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  computed: {
    timelineCards () {
      return this.$store.getters['timeline/timelineCards']
    }
  },
  created () {
    this.$store.commit('timeline/timelineCards', {
      user: {
        name: 'Michael',
        avatar: 'https://cdn.pixabay.com/photo/2017/01/31/19/07/avatar-2026510_1280.png'
      },
      recipe: {
        id: 10,
        name: 'Spaghetti Bolognese',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Spaghetti_bolognese_pasta.jpg/1600px-Spaghetti_bolognese_pasta.jpg',
        times: {
          preparation: 30
        }
      },
      created: '2019'
    })
    this.$store.commit('timeline/timelineCards', {
      user: {
        name: 'Hannes',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
      },
      recipe: {
        id: 20,
        name: 'Schweinekrustenbraten mit Knödel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Krustenbraten_mit_Dunkelbierso%C3%9Fe.jpg',
        times: {
          preparation: 60
        }
      },
      created: '2019'
    })
    console.log(this)
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
