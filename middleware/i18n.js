import { defineNuxtRouteMiddleware, useState } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.query.lang) {
    const lang = useState('lang')
    lang.value = to.query.lang
  }
})