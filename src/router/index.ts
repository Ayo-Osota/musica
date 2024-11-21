import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue"
import CollectionsPage from "@/pages/CollectionsPage.vue"
import SingleMusicPage from "@/pages/SingleMusicPage.vue"
import NotFoundPage from "@/pages/NotFoundPage.vue"
import ProfilePage from '@/pages/ProfilePage.vue'
import { useAppStore } from '@/stores/appStore'
import useUserStore from '@/stores/user'

const routes = [
  {
    name: 'Home',
    path: "/",
    component: HomePage
  },
  {
    name: 'Collections',
    path: "/collections",
    component: CollectionsPage
  },
  {
    name: 'Radio',
    path: "/radio",
    component: NotFoundPage
  },
  {
    name: 'Videos',
    path: "/videos",
    component: NotFoundPage
  },
  {
    name: 'SingleMusic',
    path: "/m/:id",
    component: SingleMusicPage
  },
  {
    name: 'UserProfile',
    path: "/profile",
    component: ProfilePage
  },
  {
    path: "/:catchAll(.*)*",
    component: NotFoundPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



const openRoutes: string[] = [
  "Home",
  'Radio',
  'Videos',
  'SingleMusic',
];

router.beforeEach((to: any, from: any, next: any) => {
  if (openRoutes.includes(to.name)) {
    next()
    return
  }

  const appStore = useAppStore()
  const userStore = useUserStore()

  if (userStore.userLoggedIn) {
    next()
  } else {
    appStore.isAuthModalOpen = true
  }
});


export default router
