import { AmplifyEventBus } from 'aws-amplify-vue'
import Auth from '@aws-amplify/auth'

async function setIsLoggined (store) {
  try {
    var user = await Auth.currentAuthenticatedUser()
    store.commit('userprofile/setIsLoggined', true)
    console.log('User is authentificated ' + user.attributes.sub)
  } catch (error) {
    store.commit('userprofile/setIsLoggined', false)
    console.log('User is ' + error)
  }
}

async function loginEvent (store) {
  AmplifyEventBus.$on('authState', info => {
    if (info === 'signedIn') {
      store.commit('userprofile/setIsLoggined', true)
      store.commit('userprofile/showLoginDialog', false)
      console.log('SignedIn Event')
    }
    if (info === 'signedOut') {
      store.commit('userprofile/setIsLoggined', false)
      console.log('SignedOut Event')
    }
  })
}

export default async ({ store }) => {
  await setIsLoggined(store)
  await loginEvent(store)
}
