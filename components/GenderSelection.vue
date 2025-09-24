<template>
  <card class="px-6 sm:px-8 md:px-10 py-6 mt-6">
    <h3 class="text-xl text-center">{{ $t('gender') }}</h3>
    <h3 class="text-center hidden sm:block label text-2xl font-bold">{{ $t('i_am') }}</h3>
    <div class="flex items-center justify-center mt-6">
      <div class="flex-1 border-7 rounded-md text-grey-100">
        <div class="flex">
          <div class="box" :class="{'bg-blue-lightest' : calculatorStore.input.isMale}" @click="calculatorStore.updateGender(true)">
            <male/>
          </div>
          <div
            class="box"
            :class="{'bg-blue-lightest' : !calculatorStore.input.isMale}"
            @click="calculatorStore.updateGender(false)"
          >
            <female/>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script setup>
import { useCalculatorStore } from '~/store/calculator'

const calculatorStore = useCalculatorStore()
</script>

<style lang="scss" scoped>
.label {
  width: 100%;
}

.box {
  @apply transition duration-300 w-1/2 p-6 flex items-center justify-center cursor-pointer;
}
</style>