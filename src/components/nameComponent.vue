<template>
  <div class="container">
    <div class="instruction">
      Enter Your name below click play button it will tack you to single player game to know your level for better match making in multiplayer game.
    </div>
    <div class="nameip">
    <input type="text" placeholder="Your Name">
    <button>Play</button>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['pname', 'scores'],
}

</script>

<style>

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30vh;
  }

  .instruction {
    font-size: 20px;
    color: #000;
    text-align: center;
    max-width: 25rem;
  }

  .nameip {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #000;
    padding: 0 10px;
  }

  button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 1rem;
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
    .container button, input {
      width: 100%;
    }
    
  }
    
  

</style>
