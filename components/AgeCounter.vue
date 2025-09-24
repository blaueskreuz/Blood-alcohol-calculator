<template>
  <card class="py-6 px-4">
    <h3 class="text-xl">Alter</h3>

    <input
      class="w-full text-3xl sm:text-4xl font-bold text-black text-center focus:outline-none sm:mt-3 sm:mb-2"
      type="number"
      min="16"
      max="70"
      :value="input.age"
      @focus="$event.target.select()"
      @input="updateAge($event.target.value)"
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

<script>
import Bump from '~/components/Bump.vue'
import Plus from '~/components/Plus.vue'
import Minus from '~/components/Minus.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Bump,
    Plus,
    Minus
  },

  computed: {
    ...mapState('calculator', ['input'])
  },

  methods: {
    ...mapMutations('calculator', ['increaseAge', 'decreaseAge', 'updateAge']),

    increment() {
      if (this.input.age < 70) {
        this.increaseAge()
      }
    },

    decrement() {
      if (this.input.age > 16) {
        this.decreaseAge()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

.btn-counter {
  @apply w-14 h-14 border-4 border-grey-200 rounded-full;
}
</style>