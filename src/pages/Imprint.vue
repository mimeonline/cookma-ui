<template>
  <q-page padding>
    <amplify-authenticator :authConfig="authConfig"></amplify-authenticator>
<amplify-sign-out></amplify-sign-out>
    <!-- <div style="max-width: 800px; margin:0 auto; ">
      <q-card>
        <q-card-section class="text-h4 text-bold text-center">
          Impressum
        </q-card-section>
      </q-card>
    </div> -->
  </q-page>
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

  components: {
    ...components
  },
  created () {
    this.$Amplify.Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => console.log(user.attributes.sub))
      .catch(err => console.log(err))
    console.log(this.$Amplify.Auth)
    this.$Amplify.I18n.setLanguage('de')
  }
}
</script>
