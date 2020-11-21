<template>
  <button class="big-button">
      {{name}}
      <img src="../assets/icons/left-arrow.svg" class="big-button__arrow" alt="arrow">
  </button>
</template>

<script>
export default {
  name: 'BigButton',
  props: {
    name
  },
}
</script>
