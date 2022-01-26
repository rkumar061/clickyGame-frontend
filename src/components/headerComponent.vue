<template>
  <header>
    <div class="logo"></div>
    <div class="buttons">
      <button class="btn btn-primary" @click="showModal">Play</button>
      <button class="btn btn-primary" @click="showModal">Multiplayer</button>
    </div>
  </header>
</template>

<script></script>

<style>
header {
  background-color: #f5f5f5;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 40rem;
}
@media screen and (max-width: 600px) {
  .buttons {
    display: none;
  }
}
</style>
