<template>
    <card class="px-8 sm:px-12 md:px-16 py-6 mt-3">
        <h3 class="text-xl mx-auto text-center max-w-xxs leading-tight">
            {{ $t('time_since_first_drink') }}
        </h3>
        <div class="flex">
            <div class="flex-1 flex-center h-32">
                <div class="w-full">
                    <Slider v-model="hours" :min="0.5" :max="24" :step="0.5" class="slider-blue" @slide="(val) => hours = val" />
                </div>
            </div>
            <div class="flex-1 flex-center h-32">
                <h3 class="text-3xl">
                    <ClientOnly>
                        <VueCountUp :end-val="hours" :duration="0.5" :options="options" />
                    </ClientOnly>
                </h3>
            </div>
        </div>
    </card>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useCalculatorStore } from '~/store/calculator'
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'

const calculatorStore = useCalculatorStore()

const startVal = ref(0)
const options = computed(() => ({
    startVal: startVal.value,
    decimalPlaces: 1,
    suffix: 'h'
}))

const hours = computed({
    get() {
        return calculatorStore.input.hoursSinceFirstDrink
    },
    set(value) {
        calculatorStore.updateHoursSinceFirstDrink(value)
    }
})

watch(hours, (newValue, oldValue) => {
    startVal.value = oldValue
})
</script>

<style lang="scss">
/* Styles for the slider */
.slider-blue {
    --slider-connect-bg: #5CB4FF;
    --slider-tooltip-bg: #2D67B2;
    --slider-handle-ring-color: #5CB4FF;
}

.slider-tooltip {

    display: none;
}
</style>