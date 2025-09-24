<template>
  <card class="rounded-lg shadow py-6 px-4 mt-8 text-center">
    <h3 class="text-xl">Grösse</h3>
    <p class="text-grey-900 text-lg font-bold mt-1 mb-3">cm</p>
    <slide-gradient>
      <hooper
        ref="carousel"
        :itemsToShow="3"
        :centerMode="true"
        :initialSlide="42"
        @afterSlide="updateSlide($event)"
      >
        <slide v-for="(height, index) in heights" :key="height" :index="index">
          <span class="title sm:text-4xl font-bold select-none">{{ height }}</span>
        </slide>
      </hooper>

      <div class="flex-col flex-center mt-2">
        <Bump/>
        <img src="/ruler.svg" alt>
      </div>
    </slide-gradient>
  </card>
</template>

<script>
import SlideGradient from '~/components/SlideGradient.vue'
import Bump from '~/components/Bump.vue'
import { Hooper, Navigation as HooperNavigation, Slide } from 'hooper'
import { mapMutations } from 'vuex'

export default {
  components: {
    Hooper,
    HooperNavigation,
    Slide,
    SlideGradient,
    Bump
  },
  data() {
    return {
      heights: []
    }
  },

  methods: {
    ...mapMutations('calculator', ['updateHeight']),

    generateHeights() {
      let startHeight = 130
      while (startHeight <= 230) {
        this.heights.push(startHeight)
        startHeight++
      }
    },

    updateSlide(slide) {
      this.updateHeight(this.heights[slide.currentSlide])
    }
  },

  created() {
    this.generateHeights()
  }
}
</script>

<style lang="scss" scoped>
.hooper {
  height: 50px;
}
.hooper:focus {
  @apply outline-none;
}

.hooper-slide {
  @apply cursor-pointer flex justify-center items-end;
}

.title {
  transition: all 0.2s;
  @apply text-grey-300 text-2xl;
}

.is-current .title {
  @apply text-black text-3xl;
}
</style>