import drinksData from '~/drinksData'

export const state = () => ({
  input: {
    age: 25,
    weight: 70,
    height: 172,
    hoursSinceFirstDrink: 1,
    isMale: true,
    drinks: []
  }
})

export const getters = {
  alcoholMass: state => {
    let total = 0

    state.input.drinks.forEach(drink => {
      drink.types.forEach(type => {
        if (type.quantity > 0) {
          total += type.quantity * type.decilitre * 100 * type.alcohol * 0.8
        }
      })
    })

    return total
  }
}

export const actions = {
  loadDrinks({ commit }) {
    commit('setDrinks', drinksData)
  }
}

export const mutations = {
  setDrinks(state, drinks) {
    state.input.drinks = drinks
  },
  resetDrinks(state) {
    state.input.drinks.forEach(drink => {
      drink.types.forEach(type => {
        type.quantity = 0
      })
    })
  },

  increaseAge(state) {
    state.input.age++
  },
  decreaseAge(state) {
    state.input.age--
  },
  updateAge(state, age) {
    state.input.age = age
  },

  increaseWeight(state) {
    state.input.weight++
  },
  decreaseWeight(state) {
    state.input.weight--
  },
  updateWeight(state, weight) {
    state.input.weight = weight
  },

  updateHoursSinceFirstDrink(state, hours) {
    state.input.hoursSinceFirstDrink = hours
  },

  updateHeight(state, height) {
    state.input.height = height
  },

  updateGender(state, isMale) {
    state.input.isMale = isMale
  },

  increaseDrinkTypeQuantity(state, { drinkIndex, typeIndex }) {
    state.input.drinks[drinkIndex].types[typeIndex].quantity++
  }
}
