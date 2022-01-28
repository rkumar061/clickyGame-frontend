<template>
  <header-component></header-component><br />
  <div class="name" v-if="nameVisible">
    <name-component @name-toggle="nameToggle"> </name-component>
  </div>
  <div class="game" v-if="gameVisible">
    <game-component
      @button-clicked="buttonClicked"
      :scoreValue="score"
      :time="time"
    >
      >
    </game-component>
  </div>

  <score-card
    :score="score"
    :name="name"
    @multiplayer="multiplayer"
    @try-again="tryAgain"
    v-if="scoreCardVisible"
  ></score-card>

  <being-matched v-if="multiGameVisible"> </being-matched>
</template>

<script>
import scoreCard from "./components/scoreCard.vue";

export default {
  components: { scoreCard },
  data() {
    return {
      nameVisible: true,
      gameVisible: false,
      scoreCardVisible: false,
      multiGameVisible: false,
      score: 0,
      time: 15,
      name: "",
      scoreValue: 0,
    };
  },
  watch: {
    score: {
      handler(value) {
        if (value === 1) {
          this.starttimer();
        }
      },
      immediate: true,
    },
  },

  methods: {
    nameToggle(uname) {
      this.nameVisible = !this.nameVisible;
      this.gameVisible = !this.gameVisible;
      this.name = uname;
      console.log(uname);
      // console.log(this.nameVisible);
    },
    buttonClicked() {
      this.score++;
      // console.log(this.score);
    },
    starttimer() {
      var timer = setInterval(() => {
        this.time--;
        console.log(this.time);
        if (this.time === 0) {
          clearInterval(timer);
          this.gameVisible = !this.gameVisible;
          this.scoreCardVisible = !this.scoreCardVisible;
        }
      }, 1000);
    },
    multiplayer() {
      this.scoreCardVisible = !this.scoreCardVisible;
      this.multiGameVisible = !this.multiGameVisible;
    },
    tryAgain() {
      this.scoreCardVisible = !this.scoreCardVisible;
      this.gameVisible = !this.gameVisible;
      this.score = 0;
      this.time = 5;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgba(8, 9, 12, 1);
  font-family: "Poppins", sans-serif;
}
</style>
