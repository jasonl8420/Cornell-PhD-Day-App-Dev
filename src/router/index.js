import { createRouter, createWebHistory } from 'vue-router'
import Directory from '../views/Directory.vue'
import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue'
import Edit from '../views/Edit.vue'
import EventCard from '../components/EventCard.vue'

import LocalTips from '../views/LocalTips.vue'

// const routes = [
//     {
//       path: '/',
//       name: 'Home',
//       component: HomeView
//     },
//     ,
//     { path: '/people/:person', name:'Profile', component: Profile },
//     { //trying for more dynamic linking
//       path: '/people/:person/edit',
//       component: Edit
//     },
//     {
//       path: '/events/:event_key',
//       name: 'event_key',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/EventDetails.vue')
//     },
//     {
//       path: '/directory',
//       name: 'directory',
//       component: Directory
//     },
//     // {
//     //   path: '/about',
//     //   name: 'about',
//     //   // route level code-splitting
//     //   // this generates a separate chunk (About.[hash].js) for this route
//     //   // which is lazy-loaded when the route is visited.
//     //   component: () => import('../views/AboutView.vue')
//     // }
//     // {path: '/eventdetails/:event_key', name: 'event_key', component: EventCard},
//     {
//       path: '/local-tips',
//       name: 'Localtips',
//       component: LocalTips,
//     },
//   ];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    ,
    { path: '/people/:person', name:'Profile', component: Profile },
    { //trying for more dynamic linking
      path: '/people/:person/edit',
      component: Edit
    },
    {
      path: '/events/:event_key',
      name: 'event_key',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EventDetails.vue')
    },
    {
      path: '/directory',
      name: 'directory',
      component: Directory
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    // {path: '/eventdetails/:event_key', name: 'event_key', component: EventCard},
    {
      path: '/local-tips',
      name: 'Localtips',
      component: LocalTips,
    },
  ],
});

export default router;
