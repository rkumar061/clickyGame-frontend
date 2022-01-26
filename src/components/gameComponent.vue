<template>
  <div class="container">
    <div class="instruction">
      <h1>
        Your most welcome to my Rapid Clicky Game! <br />
        <small> Rapid click the below button to know your score </small>
      </h1>
    </div>
    <br /><br />
    Time remaining = <i> {{ time }} seconds </i>
    <div class="game">
      <div class="score">
        <div class="scoreValue" :style="BarColor"></div>
      </div>
      <div class="button1">
        <button @click="buttonClicked">
          <div class="buttonText">Click Me</div>
        </button>
      </div>
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
        width: this.scoreValue + "%",
      };
    },
  },
};
</script>

<style>
.container {
  margin: 0;
  padding: 0;
  color: white;
  margin-top: 15vh;
  text-align: center;
}
.container small {
  font-style: italic;
  color: rgba(252, 0, 0, 0.849);
  font-size: 1rem;
  font-family: Montserrat;
}
.container h1 {
  margin: 0;
  padding: 0;
  font-family: comic sans ms;
}
.container i {
  color: palevioletred;
}
.score {
  margin: auto;
  width: 20%;
  height: 20px;
  background-color: rgb(255, 249, 215);
}
.scoreValue {
  font-size: 50px;
  background-color: rgb(255, 0, 0);
  text-align: center;
  height: 20px;
 margin-top: 1rem;
}
.button1 button{
 margin-top: 1rem;
   width:150px;
  background: linear-gradient(#ff469f, #ff6062);
  border-radius: 5px;
  height: 40px;
  border: 1px solid #000;
  background: linear-gradient(#ff469f, #ff6062);
  font-size: 20px;
  cursor: pointer;
}
.button1{
  margin: 0;
  padding: 0;}
</style>
