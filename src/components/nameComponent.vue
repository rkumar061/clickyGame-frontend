<template>
  <div class="container1">
    <div class="instruction1">
      <strong
        >Enter Your Nickname below and click on the play button
        <small>(to know your score)</small>
      </strong>
    </div>
    <div class="nameip">
      <input
        type="text"
        placeholder="Nickname"
        v-model="name"
        v-on:keyup.enter="nameToggle()"
      />
      <label for="nickname" class="egm">eg. Raunak</label>
      <button @click="nameToggle()">Play</button>
    </div>
    <p class="eg">eg. Raunak</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    nameToggle() {
      if (this.name === "") {
        alert("Please Enter Your Name");
      } else {
        this.$emit("name-toggle", this.name);
      }
    },
  },
};
</script>

<style>
.instruction1 small {
  font-style: italic;
  color: rgba(255, 255, 255, 0.74);
}
.container1 p {
  margin: -2rem;
  margin-left: -21rem;
  font-style: italic;
  color: rgba(245, 245, 245, 0.589);
}
.container1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 22vh;
}
strong {
  color: white;
}
.instruction1 {
  font-size: 20px;
  color: #fff;
  text-align: left;
  max-width: 25rem;
}

.nameip {
  display: flex;
  justify-content: center;
  align-items: center;
}
.egm {
  display: none;
}

input {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgb(0, 255, 157);
  font-family: cursive;
  padding: 0 10px;
  margin-right: 1rem;
  margin-top: 0;
}

.nameip button {
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid white;
  background: linear-gradient(#ff469f, #ff6062);
  font-size: 20px;
  cursor: pointer;
  margin: 3rem;
  margin-left: 1rem;
  animation: glow 1s infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px -5px #aef4af;
  }
  to {
    box-shadow: 0 0 5px 5px #aef4af;
  }
}
@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
    margin-top: 15vh;
  }
  .nameip {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
  .container button,
  input {
    width: 100%;
  }
  .egm {
    display: block;
    color: rgba(255, 255, 255, 0.74);
    text-align: left;
  }
  .eg {
    display: none;
  }
}
</style>
