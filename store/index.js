export const state = () => ({})

export const getters = {}

export const actions = {
  async nuxtServerInit({ dispatch }, { app }) {
    await dispatch('calculator/loadDrinks')
  }
}

export const mutations = {}
