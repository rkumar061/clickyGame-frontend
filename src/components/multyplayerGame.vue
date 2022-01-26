<template>
    <div class="game">
            <div class="score">
                <div class="scoreValue" :style="BarColor">

                </div>
            </div>
            <div class="button">
                <button @click="buttonClicked">
                    <div class="buttonText">
                        Click Me
                    </div>
                </button>
            </div>
        </div>
</template>

<script>
export default {
    props: ['scoreValue', 'time'],
    methods: {
        buttonClicked() {

            this.$emit('button-clicked');
            // console.log("buttonClicked");
        }
    },
    
    computed: {
 
        BarColor() {
            return {
                'width': this.scoreValue + '%'
            }
        },
    },
}

</script>

<style>

</style>