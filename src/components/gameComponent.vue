<template>
  <div class="container">
    <div class="instruction">
      <h1>
        Your most welcome to my Rapid Clicky Game!<br />
        <small> Rapid click the below button to know your score </small>
      </h1>
    </div>
    <br /><br />
    Time remaining = <i> {{ time }} seconds </i>
    <div class="game">
      <div class="score">
        <div class="scoreValue" :style="BarColor" :class="showGreen"></div>
      </div>
      <div class="score">
        <div class="scoreValue">
          <div class="green"><p>Easy</p></div>
          <div class="orange"><p>Medium</p></div>
          <div class="red"><p>Hard</p></div>
        </div>
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
  data() {
    return {
      gree: true,
      orang: false,
      redd: false,
    };
  },
  props: ["scoreValue", "time"],
  watch: {
    scoreValue: function (value) {
      if (value > 0 && value < 16) {
        this.gree = true;
      } else if (value < 28 && value > 16 ) {
        this.orang = true;
        this.gree = false;
      } else if (value < 50 && value > 28) {
        this.redd = true;
        this.gree = false;
        this.orang = false;
      }
    },
  },
  methods: {
    buttonClicked() {
      this.$emit("button-clicked");
      // console.log("buttonClicked");
    },
  },

  computed: {
    BarColor() {
      return {
        width: this.scoreValue + "vh",
      };
    },
    showGreen() {
      return { green: this.gree, orange: this.orang, red: this.redd };
      
    },
  },
};
</script>

<style>
.container {
  margin: 0;
  padding: 0;
  color: white;
  margin-top: 10vh;
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
  display: block;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
}
.scoreValue p {
  font-size: 10px;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  margin-top: 2px;
}
.green {
  height: 19px;
  width: 20vh;
  background: greenyellow;
}
.green p {
  color: #000;
}
.orange {
  background: orangered;
  height: 20px;
  width: 15vh;
}
.red {
  background-color: red;
  height: 20px;
  width: 10vh;
}
.red p {
  text-align: center;
}
.button1 button {
  margin-top: 2rem;
  width: 10em;
  background: linear-gradient(#ff469f, #ff6062);
  border-radius: 5px;
  height: 10em;
  border: 1px solid #000;
  background: linear-gradient(#ff469f, #ff6062);
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
animation: glow 1s infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 0 10px -10px #aef4af;
  }
  to {
    box-shadow: 0 0 10px 10px #aef4af;
  }
}
.button1 button:active {
  background: linear-gradient(#ff6062, #ff469f);
}

.button1 {
  margin: 0;
  padding: 0;
}
</style>
