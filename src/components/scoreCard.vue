<template>
  <div class="con2">
    <h1>Congrats, {{ name }}!! you scored:&nbsp; {{ score }}&nbsp; points</h1>
    <h4>
      You got qualified for <i>{{ getLevel() }} level</i>
    </h4>
    <div class="btn">
      <button @click="tryAgain">Try Again </button>
      <button @click="multiplayer">score Card >></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["score", "name", "level"],
  data() {
    return {
      Level: "",
    };
  },
  methods: {
    multiplayer() {
      this.$emit("leaderboard");
    },
    tryAgain() {
      this.$emit("tryAgain");
    },
    getLevel() {
      if (this.score < 16) {
        this.Level = "Easy";
      } else if (this.score < 28) {
        this.Level = "Medium";
      } else if (this.score < 40) {
        this.Level = "Hard";
      }else if(this.score > 45 && this.score < 60) {
        this.Level = 'Expert';
      } else if(this.score > 60 && this.score < 75) {
        this.Level = 'Master';
      } else if(this.score > 75 && this.score < 90) {
        this.Level = 'Grand Master';
      } else if(this.score > 90 && this.score < 100) {
        this.Level = 'Legendary';
      } else if(this.score > 100) {
        this.Level = 'Godlike';
      }
      this.$emit("level", this.Level);
      return this.Level;
    },
    
  },
};
</script>

<style>
.con2 {
  margin-top: 15vh;
  text-align: center;
  align-content: center;
  align-items: center;
}
.con2 button {
  width: max-content;
  background: linear-gradient(#ff469f, #ff6062);
  border-radius: 5px;
  height: 40px;
  border: 1px solid #000;
  background: linear-gradient(#ff469f, #ff6062);
  font-size: 20px;
  cursor: pointer;
}
.con2 h1,
h4 {
  color: white;
}
</style>
