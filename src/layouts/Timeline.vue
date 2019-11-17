<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated class="bg-lime-7 text-grey-9">
      <q-toolbar>
        <q-btn flat dense icon="menu" class="mobile-only" v-if="isLoggined">
          <q-menu>
            <q-list>
              <q-item clickable to="myrecipes">
                <q-item-section>Meine Rezepte</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-toolbar-title>
          <router-link to="/" style="text-decoration: none">
            Cookma - The social Cooking App
          </router-link>
        </q-toolbar-title>

        <q-icon name="fas fa-search" class="q-pr-lg" />
        <q-separator dark vertical inset />
        <q-btn flat label="Anmelden" @click="login" class="q-pr-lg" v-if="!isLoggined" />
        <q-dialog v-model="showLoginDialog">
          <amplify-authenticator :authConfig="authConfig"></amplify-authenticator>
        </q-dialog>
        <q-btn flat label="Abmelden" @click="signOut" class="q-pr-lg" v-if="isLoggined" />
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-4 mobile-only c-permanent-mobile-footer">
      <q-toolbar>
        <q-btn flat round icon="home" class="text-lime-9" to="myrecipes" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { components } from 'aws-amplify-vue'

export default {
  data () {
    return {
      authConfig: {
        signUpConfig: {
          header: 'Willkomen bei Cookma! Erstelle Deinen Account',
          hideAllDefaults: true,
          defaultCountryCode: '49',
          signUpFields: [
            {
              label: 'E-Mail',
              key: 'username',
              required: true,
              displayOrder: 1,
              type: 'string',
              signUpWith: true
            },
            {
              label: 'Passwort',
              key: 'password',
              required: true,
              displayOrder: 2,
              type: 'password'
            }
          ]
        },
        signInConfig: {
          header: 'Willkommen zurück!',
          username: 'E-Mail'
        }
      }
    }
  },
  computed: {
    isLoggined () {
      return this.$store.getters['userprofile/isLoggined']
    },
    showLoginDialog: {
      get: function () {
        return this.$store.getters['userprofile/showLoginDialog']
      },
      set: function (value) {
        this.$store.commit('userprofile/showLoginDialog', value)
      }
    }
  },
  components: {
    ...components
  },
  methods: {
    login () {
      this.$store.commit('userprofile/showLoginDialog', true)
    },
    signOut () {
      this.$Amplify.Auth.signOut()
        .then(data => {
          this.$store.dispatch('userprofile/logout')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.c-permanent-mobile-footer {
  border-top: 1px solid #9e9d24;
}
</style>
