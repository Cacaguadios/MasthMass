import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'
import './style.css'            
import 'katex/dist/katex.min.css'

// Base URL de la aplicación
const BASE = import.meta.env.BASE_URL

// Rutas 
const router = createRouter({
  history: createWebHistory(BASE),
  routes: [
    { path: '/', component: () => import('./pages/Home.vue') },
    { path: '/actividades', component: () => import('./pages/Actividades.vue') },
    { path: '/acerca', component: () => import('./pages/Acerca.vue') },
    { path: '/actividad/:id', component: () => import('./pages/Actividad.vue') },
    { path: '/fracciones', component: () => import('./pages/Fracciones.vue') },
  ],
})

// Registrar Service Worker del PWA
registerSW({ immediate: true })

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
