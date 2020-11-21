<template>
  <div class="stacked-buttons">
    <div v-for="option in optionsArray" :key="option.title" class="stacked-buttons__single">
        <img 
            src="../assets/icons/check.svg"
            class="stacked-buttons__check-mark"
            :class="{'stacked-buttons__check-mark--hidden': option.title !== selectedOption}"
            alt="check mark"
        >
        <button 
            class="stacked-buttons__button" 
            :style="{ backgroundColor: option.color}"
            @click="onClick(option.title)"
        >
            {{option.title}}
        </button>
    </div>
  </div>
</template>

<script>
import '../assets/styles/stackedButtons.scss'
export default {
  name: 'StackedButtons',
  data() {
    return {
        selectedOption: '',
    }
  },
  props: {
    optionsArray: Array,
    onOptionSelect: Function,
  },
  methods: {
    onClick(title) {
      this.selectedOption = title;
    }
  }
}
</script>
