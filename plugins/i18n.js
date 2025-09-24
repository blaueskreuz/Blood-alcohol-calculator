import { defineNuxtPlugin, useState } from '#app'
import translations from '~/translations.json' with { type: 'json' }

export default defineNuxtPlugin(nuxtApp => {
  const lang = useState('lang', () => 'de')
  const t = (key) => {
    return translations[lang.value]?.[key] || key
  }

  nuxtApp.provide('t', t)
  nuxtApp.provide('lang', lang)
})