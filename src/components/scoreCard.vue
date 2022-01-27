<template>
  <div class="con2">
    <h1>Congrats, {{ name }}!! you scored:&nbsp; {{ score }}&nbsp; points</h1>
    <h4>
      You got qualified for <i>{{getLevel()}} level</i>
    </h4>
    <div class="btn">
      <button @click="multiplayer">Multiplayer</button>
      <button @click="tryAgain">Try Again</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["score", "name", "level"],
  data() {
    return {
      Level: '',
    };
  },
  methods: {
    multiplayer() {
      this.$emit("multiplayer");
    },
    tryAgain() {
      this.$emit("tryAgain");
    },
    getLevel() {
      if(this.score > 0 && this.score < 15) {
        this.Level = 'Beginner';
      } else if(this.score > 15 && this.score < 30) {
        this.Level = 'Intermediate';
      } else if(this.score > 30 && this.score < 45) {
        this.Level = 'Advanced';
      } else if(this.score > 45 && this.score < 60) {
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
      return this.Level;
    }
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
