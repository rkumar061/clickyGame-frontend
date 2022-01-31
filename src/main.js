import { createApp } from 'vue'
import App from './App.vue'
import nameComponent from './components/nameComponent.vue';
import headerComponent from './components/headerComponent.vue';
import gameComponent from './components/gameComponent.vue';
import scoreCard from './components/scoreCard.vue';
import Leaderboard from './components/Leaderboard.vue';
const app = createApp(App);

app.component('header-component', headerComponent);
app.component('name-component', nameComponent);
app.component('game-component', gameComponent);
app.component('score-card', scoreCard);
app.component('Leaderboard', Leaderboard);

app.mount('#app');
