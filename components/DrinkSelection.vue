<template>
  <div class="drink-selection md:mx-16">
    <!-- Drinks -->
    <div class="flex justify-between items-center mb-6 overflow-x-auto scrolling-touch">
      <ul class="flex list-reset -mx-2">
        <li
          v-for="(drink, index) in input.drinks"
          :key="drink.name"
          class="px-2"
          :class="{ 'ml-4 sm:ml-8 md:ml-0': index === 0}"
          @click="select(drink, index)"
        >
          <span
            class="transition-fast px-6 py-2 text-white rounded font-bold cursor-pointer text-lg inline-block"
            :class="[active === drink.name ? 'bg-blue' : 'bg-grey-400']"
          >{{ drink.name }}</span>
        </li>
      </ul>
      <button
        class="mr-8 md:mr-0 hidden sm:inline focus:outline-none text-lg font-bold text-grey-500 cursor-pointer"
        @click="resetDrinks"
      >Reset</button>
    </div>
    <!-- Types -->
    <DrinkSelectionDrinkTypes :drink="selectedDrink"/>

    <div class="text-center px-4 mt-8">
      <button
        class="mt-3 sm:hidden focus:outline-none text-lg font-bold text-grey-500 cursor-pointer bg-grey-200 w-full py-3 rounded-md flex items-center justify-center"
        @click="reset"
      >
        <svg
          class="h-5"
          :class="{ 'rotating': shouldRotate }"
          fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
  </div>
</template>

<script>
import DrinkSelectionDrinkTypes from '~/components/DrinkSelectionDrinkTypes.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    DrinkSelectionDrinkTypes
  },

  data() {
    return {
      selectedDrink: {},
      active: 'Bier',
      shouldRotate: false,
    }
  },

  computed: {
    ...mapState('calculator', ['input'])
  },

  methods: {
    ...mapMutations('calculator', ['resetDrinks']),

    select(drink, index) {
      this.selectedDrink = { index, types: drink.types }
      this.active = drink.name
    },

    reset() {
      this.resetDrinks()

      this.shouldRotate = true

      setTimeout(() => {
        this.shouldRotate = false
      }, 1000)
    }
  },

  mounted() {
    this.selectedDrink = { index: 0, types: this.input.drinks[0].types }
  }
}
</script>

<style lang="scss" scoped>
.drink-selection {
  min-height: 260px;
}

.rotating {
  animation: rotate 0.9s ease-out;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
