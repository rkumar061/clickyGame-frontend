<template>
<header-component></header-component><br>
<div class="name" v-if="nameVisible">
<name-component 
pname="raunak" 
scores="0">
</name-component>
</div>
<div class="game" v-if="gameVisible">
game
</div>
</template>

<script>

export default {
    data() {
        return {
            nameVisible: true,
            gameVisible: false,
        }
    },
    methods: {
        nameToggle() {
            this.nameVisible = !this.nameVisible;
        }

    }
}


</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
