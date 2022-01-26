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
    v-if="scoreCardVisible"
  ></score-card>

  <multiplayer-game v-if="multiGameVisible"> </multiplayer-game>
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
      level: 0,
      scoreValue: 0,
    };
  },
  watch: {
    // level: {
    //   function(value) {
    //   if (value > 0 || this.score >0) {
    //     this.level = 1;
    //   } else if (value > 20 || this.score > 20) {
    //     this.level = 2;
    //   } else  {
    //     this.level = 3;
    //   }
    //   }, },
      score: {
      handler(value) {
        if (value === 1) {
          this.starttimer();
        }
      },
      immediate: true,
      // score(value) {
      // if (value > 0) {
      //   this.level = 1;
      // } else if (value > 20) {
      //   this.level = 2;
      // } else {
      //   this.level = 3;
      // }
      // },
    },
  },
  // watch: {
  //  score(value) {
  //     if (value > 0) {
  //       this.level = 1;
  //     } else if (value > 20) {
  //       this.level = 2;
  //     } else {
  //       this.level = 3;
  //     }
  //     },
  // },
  // computed: {
  //   levelAdd()  {
  //     if (this.score > 0) return
  //       this.level = 1;
  //   },
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
