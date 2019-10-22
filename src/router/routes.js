import MyLayout from 'layouts/MyLayout'
import Timeline from 'pages/timeline/Timeline'
import RecipeCreate from 'pages/timeline/RecipeCreate'

const routes = [
  {
    path: '/',
    component: MyLayout,
    children: [
      {
        path: '',
        component: Timeline
      },
      {
        path: 'recipe',
        component: RecipeCreate
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
