<template>
  <card
    class="sticky pin-t z-50 text-center bg-blue-light text-white transition-fast"
    :class="{'rounded-top-none': hasReachedTop }"
  >
    <div class="flex">
      <div class="px-2 box">
        <h2 class="text-2xl md:text-5xl font-bold">
          <no-ssr>
            <count-up :endVal="parseFloat(alcoholMass.toFixed(1))" :options="bakOptions"/>g
          </no-ssr>
        </h2>
        <span class="label">
          <span class="hidden md:inline">konsumierter</span> Alkohol
        </span>
      </div>
      <div
        class="px-2 bg-blue box transition-fast"
        :class="[shouldMinimize ? 'py-4 md:py-6' : 'py-8 md:py-12']"
      >
        <no-ssr>
          <h2 class="text-2xl md:text-5xl font-bold">
            <no-ssr>
              <count-up :endVal="parseFloat(promille)" :options="promilleOptions"/>
            </no-ssr>
          </h2>
        </no-ssr>
        <span class="label">Promille</span>
      </div>
      <div class="px-2 box">
        <h2 class="text-2xl md:text-5xl font-bold">
          <no-ssr>
            <count-up :endVal="parseFloat(timeUntilSober)" :options="timeUntilSoberOptions"/>h
          </no-ssr>
        </h2>
        <span class="label">Abbau-Zeit</span>
      </div>
    </div>

    <!-- Alerts -->
    <div class="w-full">
      <result-alerts :promille="promille"/>
    </div>
  </card>
</template>

<script>
import ResultAlerts from '~/components/ResultAlerts.vue'
import { mapState, mapGetters } from 'vuex'
import scroller from '~/mixins/scroller'

export default {
  components: {
    ResultAlerts
  },

  mixins: [scroller],

  data() {
    return {
      promilleOptions: {
        decimalPlaces: 2
      },
      timeUntilSoberOptions: {
        decimalPlaces: 1
      },
      bakOptions: {
        decimalPlaces: 1
      }
    }
  },

  computed: {
    ...mapState('calculator', ['input']),
    ...mapGetters('calculator', ['alcoholMass']),

    /**
     * Abbau-Zeit in Stunden
     */
    timeUntilSober() {
      let time = 0
      if (this.promille > 0) {
        time = this.promille / 0.15

        time = time + 1 //Resorptionszeit
        time = time - this.input.hoursSinceFirstDrink
      }

      if (time < 0) time = 0

      return time.toFixed(1)
    },

    /**
     * Promille
     */
    promille() {
      const { weight } = this.input
      let bak = this.alcoholMass / (weight * this.reductionFactor)

      bak = (bak - 0.2 * bak).toFixed(2)

      return bak
    },

    /**
     * Reduktionsfaktoren
     */
    reductionFactor() {
      const { weight, height, isMale } = this.input
      let r = 0

      if (!isMale) {
        r = 0.31233 - 0.006446 * weight + 0.004466 * height
      }
      if (isMale) {
        r = 0.31608 - 0.004821 * weight + 0.004432 * height
      }

      return r
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  will-change: padding, margin, border-radius;
}

.box {
  @apply w-1/3 flex items-center justify-center flex-col;
}

.label {
  @apply transition-fast mt-2 font-bold;
}

@screen md {
  .label {
    @apply mt-4;
  }
}
.rounded-top-none {
  border-radius: 0 !important;
}
</style>
