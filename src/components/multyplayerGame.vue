<template>
  <div class="game1">
     <h1>Your Score</h1>
    <div class="score">
      <div class="scoreValue" :style="BarColor"></div>
    </div>
    <h1>Opponent Score</h1>
    <div class="score">
      <div class="scoreValue" :style="BarColor"></div>
    </div>
    <div class="button2">
      <button @click="buttonClicked">
        <div class="buttonText">Click Me</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["scoreValue", "time"],
  methods: {
    buttonClicked() {
      this.$emit("button-clicked");
      // console.log("buttonClicked");
    },
  },

  computed: {
    BarColor() {
      return {
        width: this.scoreValued + "%",
      };
    },
  },
};
</script>

<style>
.game1 {
  color: white;
  margin-top: 20vh;
  justify-content: center;
  text-align: center;
}
.button2 button {
   width:150px;
  background: linear-gradient(#ff469f, #ff6062);
  border-radius: 5px;
  height: 40px;
  border: 1px solid #000;
  background: linear-gradient(#ff469f, #ff6062);
  font-size: 20px;
  cursor: pointer;
 margin-top: 1rem;

}
</style>
