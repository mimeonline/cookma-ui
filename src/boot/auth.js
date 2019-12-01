import { AmplifyEventBus } from 'aws-amplify-vue'
import Auth from '@aws-amplify/auth'

async function setIsLoggined (store) {
  try {
    await Auth.currentAuthenticatedUser()
    store.commit('userprofile/setIsLoggined', true)
  } catch (error) {
    store.commit('userprofile/setIsLoggined', false)
  }
}

async function loginEvent (store) {
  AmplifyEventBus.$on('authState', info => {
    if (info === 'signedIn') {
      store.commit('userprofile/setIsLoggined', true)
      store.commit('userprofile/showLoginDialog', false)
    }
    if (info === 'signedOut') {
      store.commit('userprofile/setIsLoggined', false)
    }
  })
}

export default async ({ store }) => {
  await setIsLoggined(store)
  await loginEvent(store)
}
