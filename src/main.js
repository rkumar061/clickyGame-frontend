import { createApp } from 'vue'
import App from './App.vue'
import nameComponent from './components/nameComponent.vue';
import headerComponent from './components/headerComponent.vue';
import gameComponent from './components/gameComponent.vue';
import scoreCard from './components/scoreCard.vue';
import beingMatched from './components/beingMatched.vue';
import lmao from './components/lmao.vue'
const app = createApp(App);

app.component('header-component', headerComponent);
app.component('name-component', nameComponent);
app.component('game-component', gameComponent);
app.component('score-card', scoreCard);
app.component('being-matched', beingMatched);
app.component('lmao',lmao)

app.mount('#app');
