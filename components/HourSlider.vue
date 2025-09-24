<template>
  <card class="px-8 sm:px-12 md:px-16 py-6 mt-6">
    <h3
      class="text-xl mx-auto text-center max-w-xxs leading-tight"
    >Vergangene Zeit nach dem ersten Drink</h3>
    <div class="flex">
      <div class="flex-1 flex-center h-32">
        <div class="w-full">
          <vue-slider
            v-model="hours"
            :process-style="lineStyle"
            :rail-style="lineStyle"
            :interval="0.5"
            :min="0.5"
            :max="24"
            tooltip="none"
          >
            <template v-slot:dot="{ value, focus }">
              <div :class="['custom-dot', { focus }]"></div>
            </template>
          </vue-slider>
        </div>
      </div>
      <div class="flex-1 flex-center h-32">
        <h3 class="text-3xl">
          <no-ssr>
            <count-up :endVal="hours" :duration="0.01" :options="options"/>
          </no-ssr>
        </h3>
      </div>
    </div>
  </card>
</template>

<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    VueSlider
  },

  data() {
    return {
      hour: 0.5,
      lineStyle: { backgroundColor: '#EFEFEF' },
      options: {
        decimalPlaces: 1,
        suffix: 'h'
      }
    }
  },

  computed: {
    ...mapState('calculator', ['input']),

    hours: {
      get() {
        return this.input.hoursSinceFirstDrink
      },
      set(value) {
        this.updateHoursSinceFirstDrink(value)
      }
    }
  },

  methods: {
    ...mapMutations('calculator', ['updateHoursSinceFirstDrink'])
  }
}
</script>

<style lang="scss" scoped>
.custom-dot {
  transform: scale(1.5);
  transition: all 0.3s;
  @apply w-full h-full rounded-full bg-blue;
}
.custom-dot:hover {
  transform: scale(1.8);
}
.custom-dot.focus {
  transform: scale(2.5);
}
</style>