<template>
  <div class="game1">
    <button type="button" class="btn btn-primary" @click.once="createPlayers()">
      show leaderboard</button>
    <div class="table">
      <table>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Level</th>
        </tr>
        
        <tr v-for="player in players" :key="player.name">
          <td>{{ player.name }}</td>
          <td>{{ player.score }}</td>
          <td>{{ player.level }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      players: [],
    }
  },
  watch: {
    //sort the players array by score
    players: {
      handler(value) {
        value.sort((a, b) => {
          this.players = b.score - a.score
        })
      },
      },
      immediate: true,
    },
  
  methods: {
    buttonClicked() {
      this.$emit("button-clicked");
      // console.log("buttonClicked");
    },
    createPlayers() {
      fetch("https://clicky-1f03f-default-rtdb.asia-southeast1.firebasedatabase.app/leaderboard.json")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          
          
          for (var id in data) {
            this.players.push({name: data[id].name, score: data[id].score, level: data[id].level });
          }
          
        });
        for (var i=0; i<this.players.length; i++){
          console.log(this.players.proxy[i].name);
        }
        console.log(this.players);

        }
      
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
