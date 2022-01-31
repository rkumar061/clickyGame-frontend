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
    @leaderboard="leaderboard"
    @try-again="tryAgain"
    v-if="scoreCardVisible"
    @level="level"
  ></score-card>

  <being-matched v-if="multiGameVisible" :players="players"> </being-matched>
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
      time: 5,
      name: "",
      Level: "",
      players: [],
      
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
  // computed: {
  //   players() {
  //     return [
  //       {
  //         name: this.name,
  //         score: this.score,
  //         level: this.Level,
  //       },
  //     ];
  //   },
  // },

  methods: {
    nameToggle(data) {
      this.nameVisible = !this.nameVisible;
      this.gameVisible = !this.gameVisible;
      this.name = data.name;
      console.log(data.name);
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
    leaderboard() {
      this.scoreCardVisible = !this.scoreCardVisible;
      this.multiGameVisible = !this.multiGameVisible;
      fetch("https://clicky-1f03f-default-rtdb.asia-southeast1.firebasedatabase.app/leaderboard.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          score: this.score,
          level: this.Level,
        }),
      });
      
    },
    tryAgain() {
      this.scoreCardVisible = !this.scoreCardVisible;
      this.gameVisible = !this.gameVisible;
      this.score = 0;
      this.time = 5;
    },
    level(data) {
      this.Level = data;
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
