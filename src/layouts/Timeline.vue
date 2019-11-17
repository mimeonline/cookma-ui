<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated class="bg-lime-7 text-grey-9">
      <q-toolbar>
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
