<template>
  <div class="progress">
      <img src="../assets/icons/left-arrow.svg" @click="arrowClick" class="progress__arrow" alt="left arrow">
      <span 
        v-for="n in length" 
        :key="n" 
        class="progress__line"
        :class="{'progress__line--long': currentStep === n}"
      >
      </span>
  </div>
</template>

<script>
import '../assets/styles/progressLine.scss'

export default {
  name: 'ProgressLine',
  props: {
    length: Number,
    currentStep: Number,
    onBackClick: Function,
  },
  methods: {
    arrowClick() {
      if(this.currentStep === 1 || this.currentStep === length) return;
      this.onBackClick();
    }
  }
}
</script>
