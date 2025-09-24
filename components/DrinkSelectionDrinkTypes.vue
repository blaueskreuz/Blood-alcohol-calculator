<template>
  <div class>
    <ul class="list-reset flex md:-mx-2 overflow-x-auto overflow-y-hidden pt-3 scrolling-touch">
      <li
        v-for="(type, index) in drink.types"
        :key="type.name"
        class="px-2"
        :class="{'pl-4 sm:pl-8 md:pl-0': index === 0}"
      >
        <button
          class="transition-fast bg-blue-lightest md:hover:bg-blue-light rounded-full w-22 h-22 flex-center cursor-pointer relative focus:outline-none"
          @click.prevent="increaseQuantity(index)"
        >
          <component :is="type.slug"/>
          <transition name="bounce">
            <div
              v-show="type.quantity > 0"
              class="rounded-full bg-red min-w-8 h-8 px-2 text-white text-xl font-bold absolute pin-t pin-r -mt-2 -mr-2 flex-center"
            >{{ type.quantity }}</div>
          </transition>
        </button>

        <div class="text-center font-bold mt-3 sm:mt-4">
          <p>{{ type.name }}</p>
          <div class="text-grey-500 mt-1">
            <span v-if="type.decilitre === 10">1L</span>
            <span v-else>{{ type.decilitre }}dl</span>
            <span>({{ type.alcohol * 100 }}%)</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Baileys from '~/components/drinks/Baileys.vue'
import Flasche from '~/components/drinks/Flasche.vue'
import Grappa from '~/components/drinks/Grappa.vue'
import GrosseBuchse from '~/components/drinks/GrosseBuchse.vue'
import GrossesGlas from '~/components/drinks/GrossesGlas.vue'
import KleinesGlas from '~/components/drinks/KleinesGlas.vue'
import Mass from '~/components/drinks/Mass.vue'
import MittleresGlas from '~/components/drinks/MittleresGlas.vue'
import Pastis from '~/components/drinks/Pastis.vue'
import Shot from '~/components/drinks/Shot.vue'
import Stange from '~/components/drinks/Stange.vue'
import Starkbier from '~/components/drinks/Starkbier.vue'
import Whisky from '~/components/drinks/Whisky.vue'

export default {
  components: {
    Baileys,
    Flasche,
    Grappa,
    GrosseBuchse,
    GrossesGlas,
    KleinesGlas,
    Mass,
    MittleresGlas,
    Pastis,
    Shot,
    Stange,
    Starkbier,
    Whisky
  },
  props: {
    drink: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState('calculator', ['input'])
  },

  methods: {
    ...mapMutations('calculator', ['increaseDrinkTypeQuantity']),

    increaseQuantity(typeIndex) {
      this.increaseDrinkTypeQuantity({
        drinkIndex: this.drink.index,
        typeIndex
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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
