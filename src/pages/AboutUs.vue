<template>
  <q-page padding>
    <div style="max-width: 800px; margin:0 auto;">
      <q-card>
        <q-card-section class="text-h4 text-bold text-center">
          Über uns
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import Auth from '@aws-amplify/auth'
import { API } from 'aws-amplify'

async function postData () {
  let apiName = 'recipe'
  let path = '/recipe'
  let myInit = {
    headers: {
      'Authorization': `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
      'Content-Type': 'application/json'
    },
    body: { id: '5' }
  }
  return API.post(apiName, path, myInit)
}

export default {
  // name: 'PageName',

  created () {
    console.log(API)
    postData()
  }
}
</script>
