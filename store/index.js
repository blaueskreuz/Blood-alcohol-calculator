import translations from '~/translations.json'

export const state = () => ({
  translations: translations,

  // Fallback language if there is no ?lang=xyz param 
  // Languages are defined in assets/translations.json
  lang: 'de' 
})

export const mutations = {
  SET_LANG(state, lang) {
    state.lang = lang
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }, { app }) {
    await dispatch('calculator/loadDrinks')
  }
}