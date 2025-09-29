<template>
    <ul class="flex list-reset list-reset flex overflow-x-auto overflow-y-hidden scrolling-touch gap-3">
        <li v-for="(drink, index) in calculatorStore.input.drinks" :key="drink.name" @click="select(drink, index)">
            <span
                class="transition duration-150 px-6 py-2 text-white rounded-lg font-bold cursor-pointer text-lg inline-block whitespace-nowrap"
                :class="[active === drink.name ? 'bg-blue' : 'bg-grey-400']">
                {{ $t(drink.name) }}
            </span>
        </li>

        <!-- Reset Button (Desktop only) -->
        <li class="hidden sm:block">
            <button
                class="transition duration-150 px-6 py-2 rounded-lg font-bold cursor-pointer text-lg inline-block bg-red-400"
                @click="calculatorStore.resetDrinks()" aria-label="Reset Drinks">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="27.5" width="27.5">
                    <path style="fill: #ffffff;"
                        d="M544.1 256L552 256C565.3 256 576 245.3 576 232L576 88C576 78.3 570.2 69.5 561.2 65.8C552.2 62.1 541.9 64.2 535 71L483.3 122.8C439 86.1 382 64 320 64C191 64 84.3 159.4 66.6 283.5C64.1 301 76.2 317.2 93.7 319.7C111.2 322.2 127.4 310 129.9 292.6C143.2 199.5 223.3 128 320 128C364.4 128 405.2 143 437.7 168.3L391 215C384.1 221.9 382.1 232.2 385.8 241.2C389.5 250.2 398.3 256 408 256L544.1 256zM573.5 356.5C576 339 563.8 322.8 546.4 320.3C529 317.8 512.7 330 510.2 347.4C496.9 440.4 416.8 511.9 320.1 511.9C275.7 511.9 234.9 496.9 202.4 471.6L249 425C255.9 418.1 257.9 407.8 254.2 398.8C250.5 389.8 241.7 384 232 384L88 384C74.7 384 64 394.7 64 408L64 552C64 561.7 69.8 570.5 78.8 574.2C87.8 577.9 98.1 575.8 105 569L156.8 517.2C201 553.9 258 576 320 576C449 576 555.7 480.6 573.4 356.5z" />
                </svg>
            </button>
        </li>
    </ul>

    <DrinkSelectionDrinkTypes :drink="selectedDrink" />

    <!-- Reset Button (Mobile only) -->
    <button
        class="transition duration-150 px-6 py-2 rounded-lg font-bold cursor-pointer text-lg inline-block bg-red-400 text-white flex justify-center items-center gap-3 sm:hidden"
        @click="reset">
        <span>
            {{ $t('reset') }}
        </span>
        <svg class="h-5" :class="{ 'rotating': shouldRotate }" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clip-rule="evenodd"></path>
        </svg>
    </button>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCalculatorStore } from '~/store/calculator'

// 1. Instantiate the store
const calculatorStore = useCalculatorStore()

// 2. Local reactive state
const selectedDrink = ref({})
const active = ref('beer') // Use the key from your translation file
const shouldRotate = ref(false)

// 3. Local methods
function select(drink, index) {
    selectedDrink.value = { index, types: drink.types }
    active.value = drink.name
}

function reset() {
    calculatorStore.resetDrinks()
    shouldRotate.value = true
    setTimeout(() => {
        shouldRotate.value = false
    }, 1000)
}

// 4. Lifecycle Hook
onMounted(() => {
    calculatorStore.loadDrinks()
    if (calculatorStore.input.drinks.length > 0) {
        selectedDrink.value = { index: 0, types: calculatorStore.input.drinks[0].types }
    }
})
</script>

<style lang="scss" scoped>
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