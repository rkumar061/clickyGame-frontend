import { createApp } from 'vue'
import App from './App.vue'
import nameComponent from './components/nameComponent.vue'
import headerComponent from './components/headerComponent.vue'
const app = createApp(App)

app.component('name-component', nameComponent)
app.component('header-component', headerComponent)

app.mount('#app')
