import Amplify, { Logger, I18n } from '@aws-amplify/core'
import Auth, { AuthClass } from '@aws-amplify/auth'
import { AmplifyPlugin } from 'aws-amplify-vue'
import { API } from 'aws-amplify'

import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

export default ({ Vue }) => {
  Vue.use(AmplifyPlugin, { Logger, I18n, Auth, AuthClass, API })
}
