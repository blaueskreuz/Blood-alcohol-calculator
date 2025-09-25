<template>
  <card
    class="sticky top-0 z-50 text-center bg-blue-light text-white card"
    :class="{ 'rounded-top-none': hasReachedTop }"
  >
    <div class="flex">
      <div class="px-2 box bg-blue-light">
        <h2 class="text-2xl md:text-4xl font-bold flex items-end leading-none">
          <ClientOnly>
            <VueCountUp :end-val="parseFloat(calculatorStore.alcoholMass.toFixed(1))" :options="bakOptions" />
            <span class="unit">g</span>
          </ClientOnly>
        </h2>
        <span class="label">
          <span class="label">{{ $t('consumed_alcohol') }}</span>
        </span>
      </div>
      <div
        class="px-2 bg-blue box transition duration-150"
        :class="[shouldMinimize ? 'py-4 md:py-6' : 'py-8 md:py-12']"
      >
        <ClientOnly>
          <h2 class="text-2xl md:text-4xl font-bold flex items-end leading-none">
            <VueCountUp :end-val="parseFloat(promille)" :options="promilleOptions" />
            <span class="unit">‰</span>
          </h2>
        </ClientOnly>
        <span class="label">{{ $t('blood_alcohol_content') }}</span>
      </div>
      <div class="px-2 box bg-blue-light">
        <h2 class="text-2xl md:text-4xl font-bold flex items-end leading-none">
          <ClientOnly>
            <VueCountUp :end-val="parseFloat(timeUntilSober)" :options="timeUntilSoberOptions" />
            <span class="unit">h</span>
          </ClientOnly>
        </h2>
        <span class="label">{{ $t('breakdown_time') }}</span>
      </div>
    </div>

    <div class="w-full">
      <result-alerts :promille="promille" />
    </div>
  </card>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useCalculatorStore } from '~/store/calculator'
import throttle from 'lodash/throttle'

// --- Pinia Store ---
const calculatorStore = useCalculatorStore()

// --- Local State (from data option) ---
const promilleOptions = { decimalPlaces: 2 }
const timeUntilSoberOptions = { decimalPlaces: 1 }
const bakOptions = { decimalPlaces: 1 }

// --- Scroller Mixin Logic ---
const hasReachedTop = ref(false)
const shouldMinimize = ref(false)

const scrollHandler = throttle(() => {
  const el = document.querySelector('.sticky')
  if (el && el.getBoundingClientRect) {
    const { scrollY } = window
    shouldMinimize.value = scrollY > el.clientHeight
    hasReachedTop.value =
      el.getBoundingClientRect().y === 0 && shouldMinimize.value
  }
}, 50)

onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollHandler)
})


// --- Computed Properties ---
const reductionFactor = computed(() => {
  const { weight, height, isMale } = calculatorStore.input
  if (!isMale) {
    return 0.31233 - 0.006446 * weight + 0.004466 * height
  }
  return 0.31608 - 0.004821 * weight + 0.004432 * height
})

const promille = computed(() => {
  const { weight } = calculatorStore.input
  if (!weight || !reductionFactor.value) return '0.00'
  let bak = calculatorStore.alcoholMass / (weight * reductionFactor.value)
  bak = (bak - 0.2 * bak)
  return bak > 0 ? bak.toFixed(2) : '0.00'
})

const timeUntilSober = computed(() => {
  let time = 0
  const promilleValue = parseFloat(promille.value)
  if (promilleValue > 0) {
    time = promilleValue / 0.15
    time = time + 1 // Resorptionszeit
    time = time - calculatorStore.input.hoursSinceFirstDrink
  }
  return time > 0 ? time.toFixed(1) : '0.0'
})

</script>

<style lang="scss" scoped>
* {
    will-change: padding, margin, border-radius;
}

.box {
    @apply w-1/3 flex items-center justify-between flex-col py-4;
}

.label {
    @apply transition duration-150 mt-2 font-bold;
}

@screen md {
    .label {
        @apply mt-4;
    }
}

.rounded-top-none {
    border-radius: 0 !important;
}

.card {

    transition: border-radius .2s ease-in-out
}

.unit {

    font-size: 1rem;
    margin-left: .25rem;
    margin-bottom: 0.35rem;
}
</style>
