<template>
  <div class="onboard">
    <div v-if="step === 1">
      <img src="../assets/icons/star.svg" class="onboard__img-left" alt="star">
      <div class="intro-area">
        <div class="intro-area__left intro-area__left--align">
          <h1 class="intro-area__heading">What are you most interested in?</h1>
          <p class="intro-area__paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="intro-area__right intro-area__right--light">
          <StackedButtons 
            :optionsArray="[
              {title: 'Education', color: '#bbbfca'},
              {title: 'Finance', color: '#e8e8e8'},
              {title: 'Sports', color: '#495464'},
              {title: 'Technology', color: '#bbbbbb'},
              {title: 'Travel', color: '#99a8b2'},
            ]"
          />
          <button class="default-button ml-3" @click="toNextStep">Next</button>
        </div>
      </div>
    </div>

    <div v-if="step === 2">
      <img src="../assets/icons/operation.svg" class="onboard__img-left" alt="star">
      <div class="intro-area">
        <div class="intro-area__left intro-area__left--align">
          <h1 class="intro-area__heading">Would you like email Notifications?</h1>
          <p class="intro-area__paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Exercitationem autem atque, deleniti corrupti animi cupiditate! dolor sit amet consectetur
          </p>
        </div>
        <div class="intro-area__right intro-area__right--light">
          <BigButton 
            name="Yes"
          />
          <BigButton
            name="No"
          />
        </div>
      </div>
    </div>
    <ProgressLine
      :length="5"
      :currentStep="step"
      :onBackClick="toPreviousStep"
    />
  </div>
</template>

<script>
import StackedButtons from '@/components/StackedButtons.vue';
import ProgressLine from '@/components/ProgressLine.vue';
import BigButton from '@/components/BigButton.vue';

export default {
  name: 'Onboard',
  components: {
    StackedButtons,
    ProgressLine,
    BigButton,
  },
  data() {
    return {
        step: 1,
    }
  },
  methods: {
    toNextStep() {
      this.step += 1;
    },
    toPreviousStep() {
      this.step -= 1;
    }
  }
}
</script>
