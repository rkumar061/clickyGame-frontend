<template>
  <div class="con2">
    <h1>Congrats, {{ name }}!! you scored:&nbsp; {{ score }}&nbsp; points</h1>
    <h4>
      You got qualified for <i>{{ Level > 20 ? 'hard' : 'easy'}} level</i>
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
      Level: this.score,
    };
  },
  watch: {
    Level: {
      function(value) {
        if ( value > 0) {
          this.Level = 1;
        }
         else {
          this.Level = 3;
        }
      },
    },
  },
  methods: {
    multiplayer() {
      this.$emit("multiplayer");
    },
    tryAgain() {
      this.$emit("tryAgain");
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
