<template>
    <div class="container">
        <div class="instruction">
            <p>
                Welcome to the game!
            </p>
            <p>
                click the red button to increase the score of the game
            </p>
        </div>
        time remaining = {{time}}
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
.score{
    width: 100%;
    height: 20px;
    background-color: rgb(255, 249, 215);
}
.scoreValue{
    font-size: 50px;
    background-color: rgb(255, 0, 0);
    text-align: center;
    height: 20px;
   
}

</style>