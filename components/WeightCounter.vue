<template>
  <card class="py-6 px-4">
    <h3 class="text-xl">{{ $t('weight') }}</h3>

    <input
      class="w-full text-3xl sm:text-4xl font-bold text-black text-center focus:outline-none sm:mt-3 sm:mb-2"
      type="number"
      min="30"
      max="200"
      :value="calculatorStore.input.weight"
      @focus="$event.target.select()"
      @input="calculatorStore.updateWeight($event.target.value)"
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

const calculatorStore = useCalculatorStore()

function increment() {
  if (calculatorStore.input.weight < 200) {
    calculatorStore.increaseWeight()
  }
}

function decrement() {
  if (calculatorStore.input.weight > 30) {
    calculatorStore.decreaseWeight()
  }
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-sbottom-0utton,
input::-webkit-inner-sbottom-0utton {

  -webkit-appearance: none;
  margin: 0;
}

.btn-counter {
  @apply w-14 h-14 border-4 border-grey-200 rounded-full;
}
</style>