<template>
    <card class="rounded-lg shadow py-6 px-4 mt-8 text-center">
        <h3 class="text-xl">{{ $t('height') }}</h3>
        <p class="text-grey-900 text-lg font-bold mt-1 mb-3">cm</p>
        <slide-gradient>
            <ClientOnly>
                <Carousel :items-to-show="3" v-model="currentSlide" :wrap-around="true" class="height-carousel">
                    <Slide v-for="height in heights" :key="height">
                        <div class="carousel__item">
                            <span class="title sm:text-4xl font-bold select-none">{{ height }}</span>
                        </div>
                    </Slide>
                </Carousel>
            </ClientOnly>

            <div class="flex-col flex-center mt-2">
                <Bump />
                <img src="/ruler.svg" alt="Ruler icon" />
            </div>
        </slide-gradient>
    </card>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useCalculatorStore } from '~/store/calculator'

import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const calculatorStore = useCalculatorStore()
const heights = ref([])

const currentSlide = ref(42)

watch(currentSlide, (newIndex) => {
    if (heights.value.length > 0) {
        calculatorStore.updateHeight(heights.value[newIndex])
    }
})

function generateHeights() {
    for (let i = 130; i <= 230; i++) {
        heights.value.push(i)
    }
}

onMounted(() => {
    generateHeights()
    // Set initial height in store
    if (heights.value.length > 0) {
        calculatorStore.updateHeight(heights.value[currentSlide.value])
    }
})
</script>

<style lang="scss" scoped>
.height-carousel {
    height: 50px;
}

.carousel__item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;
}

.carousel__slide--active .carousel__item .title {
    color: black;
    font-size: 1.875rem;
}

.title {
    transition: all 0.2s;
    color: #DEDEDE;
    font-size: 1.5rem;
}
</style>