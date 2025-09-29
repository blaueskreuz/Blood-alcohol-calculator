<template>
    <ul class="list-reset flex overflow-x-auto overflow-y-hidden scrolling-touch gap-3 pt-2">
        <li v-for="(type, index) in drink.types" :key="type.name" class="drink">
            <button
                class="transition duration-150 bg-blue-lightest md:hover:bg-blue-light rounded-full h-19 w-19 flex-center cursor-pointer relative focus:outline-none"
                @click.prevent="increaseQuantity(index)">
                <component :is="drinkIcons[convertComponentName(type.slug)]" />
                <transition name="bounce">
                    <div v-show="type.quantity > 0"
                        class="rounded-full bg-red min-w-8 h-8 px-2 text-white text-xl font-bold absolute top-0 right-0 -mt-2 -mr-2 flex-center">
                        {{ type.quantity }}</div>
                </transition>
            </button>

            <div class="text-center font-bold mt-3 sm:mt-4">
                <p>{{ $t(type.name) }}</p>
                <div class="text-grey-500 mt-1 flex flex-wrap gapx-1 justify-center text-sm">
                    <span v-if="type.decilitre === 10">1L</span>&nbsp;
                    <span v-else>{{ type.decilitre }}dl</span>&nbsp;
                    <span>({{ type.alcohol * 100 }}%)</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { useCalculatorStore } from '~/store/calculator'

// These are needed because we need them on line 9, dont delete (not the prettiest approach but it works)
import DrinksBaileys from '~/components/drinks/Baileys.vue';
import DrinksFlasche from '~/components/drinks/Flasche.vue';
import DrinksGrappa from '~/components/drinks/Grappa.vue';
import DrinksGrosseBuchse from '~/components/drinks/GrosseBuchse.vue';
import DrinksGrossesGlas from '~/components/drinks/GrossesGlas.vue';
import DrinksKleinesGlas from '~/components/drinks/KleinesGlas.vue';
import DrinksMass from '~/components/drinks/Mass.vue';
import DrinksMittleresGlas from '~/components/drinks/MittleresGlas.vue';
import DrinksPastis from '~/components/drinks/Pastis.vue';
import DrinksShot from '~/components/drinks/Shot.vue';
import DrinksStange from '~/components/drinks/Stange.vue';
import DrinksStarkbier from '~/components/drinks/Starkbier.vue';
import DrinksWhisky from '~/components/drinks/Whisky.vue';

const drinkIcons = {
    DrinksBaileys,
    DrinksFlasche,
    DrinksGrappa,
    DrinksGrosseBuchse,
    DrinksGrossesGlas,
    DrinksKleinesGlas,
    DrinksMass,
    DrinksMittleresGlas,
    DrinksPastis,
    DrinksShot,
    DrinksStange,
    DrinksStarkbier,
    DrinksWhisky
};

// Define the props the component accepts
const props = defineProps({
    drink: {
        type: Object,
        required: true
    }
})

// Instantiate the Pinia store
const calculatorStore = useCalculatorStore()

// Convert slug to component-name
const convertComponentName = (str) => {
    let res = "Drinks" + str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    return res;
}

// Define the method to call the store action
function increaseQuantity(typeIndex) {
    calculatorStore.increaseDrinkTypeQuantity({
        drinkIndex: props.drink.index,
        typeIndex
    })
}
</script>

<style lang="scss" scoped>

.drink {

    width: 5rem;
    max-width: 5rem;
    min-width: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
}
.min-w-8 {
    min-width: 2rem;
}

.bounce-enter-active {
    animation: bounce 0.2s;
}

.bounce-leave-active {
    animation: bounce 0.3s reverse;
}

@keyframes bounce {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.15);
    }

    100% {
        transform: scale(1);
    }
}
</style>