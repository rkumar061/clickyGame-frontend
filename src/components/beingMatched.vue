<template>
  <div class="game1">
    <h1>You're being matched</h1>
    <div id="log">
      <h2>c{{ name }}</h2>
    </div>
    <h4>Against</h4>
    <div id="log">
      <h2>d{{ Oppname }}</h2>
    </div>
    <!-- <div class="score">
      <div class="scoreValue" :style="BarColor"></div>
    </div>
    <h1>Opponent Score</h1>
    <div class="score">
      <div class="scoreValue" :style="BarColor"></div>
    </div> -->
    <div class="button2">
      <button @click="buttonClicked">
        <div class="buttonText">Ready</div>
      </button>
    </div>
    <br /><small>(Click on ready to proceed)</small>
  </div>
</template>

<script>
export default {
  props: ["scoreValue", "time", "name"],
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
.game1 small {
  font-style: italic;
}
.button2 button {
  width: 150px;
  background: linear-gradient(#ff469f, #ff6062);
  border-radius: 5px;
  height: 40px;
  border: 1px solid #000;
  background: linear-gradient(#ff469f, #ff6062);
  font-size: 20px;
  cursor: pointer;
  margin-top: 1rem;
}
#log {
  background-color: gray;
  width: 10rem;
  margin: auto;
}
</style>
