<template>
  <card class="px-6 sm:px-8 md:px-10 py-6 mt-6">
    <h3 class="text-xl text-center">Geschlecht</h3>
    <div class="flex items-center justify-center mt-6">
      <h3 class="hidden sm:block label text-2xl font-bold">Ich bin</h3>
      <div class="flex-1 border-7 rounded-md text-grey-100">
        <div class="flex">
          <div class="box" :class="{'bg-blue-lightest' : input.isMale}" @click="updateGender(true)">
            <male/>
          </div>
          <div
            class="box"
            :class="{'bg-blue-lightest' : !input.isMale}"
            @click="updateGender(false)"
          >
            <female/>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import Male from '~/components/Male.vue'
import Female from '~/components/Female.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Male,
    Female
  },

  computed: {
    ...mapState('calculator', ['input'])
  },

  methods: {
    ...mapMutations('calculator', ['updateGender'])
  }
}
</script>

<style lang="scss" scoped>
.label {
  width: 130px;
}

.box {
  @apply transition-slow w-1/2 p-6 rounded-md flex items-center justify-center cursor-pointer;
}
</style>