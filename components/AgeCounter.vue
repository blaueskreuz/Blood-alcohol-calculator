<template>
  <card class="py-6 px-4">
    <h3 class="text-xl">{{ $t('age') }}</h3>

    <input
      class="w-full text-3xl sm:text-4xl font-bold text-black text-center focus:outline-none sm:mt-3 sm:mb-2"
      type="number"
      min="16"
      max="70"
      :value="calculatorStore.input.age"
      @focus="$event.target.select()"
      @input="calculatorStore.updateAge($event.target.value)"
    >

    <div>
      <bump/>
      <div class="border-t-4 border-grey-200 -mt-1 flex justify-around pt-4 sm:pt-6">
        <button class="btn-counter focus:outline-none flex-center" @click="decrement">
          <minus/>
        </button>
        <button class="btn-counter focus:outline-none flex-center" @click="increment">
          <plus/>
        </button>
      </div>
    </div>
  </card>
</template>

<script setup>
import { useCalculatorStore } from '~/store/calculator'

// 1. Instantiate the Pinia store
const calculatorStore = useCalculatorStore()

// 2. Define component-specific logic
function increment() {
  if (calculatorStore.input.age < 70) {
    calculatorStore.increaseAge()
  }
}

function decrement() {
  if (calculatorStore.input.age > 16) {
    calculatorStore.decreaseAge()
  }
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-sbottom-0utton,
input::-webkit-inner-sbottom-0utton {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

.btn-counter {
  @apply w-14 h-14 border-4 border-grey-200 rounded-full;
}
</style>