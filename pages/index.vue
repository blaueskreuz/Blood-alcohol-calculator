<template>
  <section class="md:max-w-xl mx-auto md:mb-32">

    <!-- Result Card -->
    <result/>

    <!-- Options Card -->
    <card class="py-6 sm:py-8 md:py-12 md:mt-8 border-grey-300 md:border-3">

      <!-- Drink Selection -->
      <div class="px-4 sm:px-8 md:px-16 flex flex-col gap-5">
        <drink-selection/>
      </div>

      <!-- Counters -->
      <div class="px-4 sm:px-8 md:px-16 mt-6">

        <div class="flex gap-3 text-center">
          <!-- Age -->
          <div class="flex-1">
            <age-counter class="shadow"/>
          </div>
          <!-- Weight -->
          <div class="flex-1">
            <weight-counter class="shadow"/>
          </div>
        </div>
        
        <!-- Height Slider -->
        <height-slider class="shadow"/>

        <!-- Hour Slider -->
        <hour-slider class="shadow"/>

        <!-- Gender Selection -->
        <gender-selection class="shadow"/>
      </div>
    </card>

    <footer>
      <p
        class="leading-normal mt-8 mb-16 mx-4 sm:mx-6 md:mx-0"
      >{{ $t('disclaimer') }}</p>
    </footer>
  </section>
</template>