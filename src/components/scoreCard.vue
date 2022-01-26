<template>
    {{score}}
    {{name}}
    <button @click="multiplayer">
       go to multiplayer
    </button>
    
</template>

<script>
export default {
    props: ['score', 'name'],
    methods: {
        multiplayer(){
            this.$emit('multiplayer');
        }
    }
}
</script>

<style>

</style>
