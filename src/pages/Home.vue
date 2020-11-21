<template>
  <div class="home">
    <div class="intro-area">
      <div class="intro-area__left">
        <h1 class="intro-area__heading">Welcome to Gurus+ ..become Talented</h1>
        <p class="intro-area__paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita maxime cumque nesciunt consequuntur fuga laudantium modi laborum. Consequatur, ipsa perferendis.
        </p>
      </div>
      <div class="intro-area__right">
        <img src="../assets/icons/checked.svg" class="intro-area__img" alt="checked circle">
        <router-link to="/onboarding" class="intro-area__button default-button">Get Started</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
