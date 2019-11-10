import TimelineLayout from 'layouts/Timeline'
import Generic from 'layouts/Generic'
import Timeline from 'pages/timeline/Timeline'
import Recipe from 'pages/recipe/Recipe'
import CreateRecipe from 'pages/recipe/CreateRecipe'
import Imprint from 'pages/Imprint'
import Contact from 'pages/Contact'
import AboutUs from 'pages/AboutUs'
import Privacy from 'pages/Privacy'
import UserCondition from 'pages/UserCondition'
import MyRecipes from 'pages/myrecipes/MyRecipes'

const routes = [
  {
    path: '/',
    component: TimelineLayout,
    children: [{ path: '', component: Timeline }]
  },
  {
    path: '/recipe',
    component: Generic,
    children: [
      { path: '', component: CreateRecipe },
      { path: ':id', component: Recipe }
    ]
  },
  {
    path: '/myrecipes',
    component: Generic,
    children: [
      { path: '', component: MyRecipes }
    ]
  },
  {
    path: '/imprint',
    component: Generic,
    children: [{ path: '', component: Imprint }]
  },
  {
    path: '/contact',
    component: Generic,
    children: [{ path: '', component: Contact }]
  },
  {
    path: '/aboutus',
    component: Generic,
    children: [{ path: '', component: AboutUs }]
  },
  {
    path: '/privacy',
    component: Generic,
    children: [{ path: '', component: Privacy }]
  },
  {
    path: '/UserCondition',
    component: Generic,
    children: [{ path: '', component: UserCondition }]
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
