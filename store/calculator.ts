import { defineStore } from 'pinia'
import drinksData from '~/drinksData'

interface DrinkType {
  name: string
  slug: string
  decilitre: number
  alcohol: number
  quantity: number
}

interface Drink {
  name: string
  types: DrinkType[]
}

interface CalculatorInput {
  age: number
  weight: number
  height: number
  hoursSinceFirstDrink: number
  isMale: boolean
  drinks: Drink[]
}

// Define the store
export const useCalculatorStore = defineStore('calculator', {
  state: (): { input: CalculatorInput } => ({
    input: {
      age: 25,
      weight: 70,
      height: 172,
      hoursSinceFirstDrink: 1,
      isMale: true,
      drinks: []
    }
  }),

  getters: {
    /**
     * Calculates the total mass of alcohol consumed.
     */
    alcoholMass(state): number {
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
  },

  actions: {
    /**
     * Loads the initial drink data into the store.
     */
    loadDrinks() {
      this.input.drinks = drinksData
    },

    /**
     * Resets the quantity of all drinks to zero.
     */
    resetDrinks() {
      this.input.drinks.forEach(drink => {
        drink.types.forEach(type => {
          type.quantity = 0
        })
      })
    },

    increaseAge() {
      this.input.age++
    },

    decreaseAge() {
      this.input.age--
    },

    updateAge(age: number) {
      this.input.age = age
    },

    increaseWeight() {
      this.input.weight++
    },

    decreaseWeight() {
      this.input.weight--
    },

    updateWeight(weight: number) {
      this.input.weight = weight
    },

    updateHoursSinceFirstDrink(hours: number) {
      this.input.hoursSinceFirstDrink = hours
    },

    updateHeight(height: number) {
      this.input.height = height
    },

    updateGender(isMale: boolean) {
      this.input.isMale = isMale
    },

    increaseDrinkTypeQuantity({
      drinkIndex,
      typeIndex
    }: {
      drinkIndex: number
      typeIndex: number
    }) {
      this.input.drinks[drinkIndex].types[typeIndex].quantity++
    }
  }
})