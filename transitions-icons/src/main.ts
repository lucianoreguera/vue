import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiTrash, LaStickyNote } from 'oh-vue-icons/icons'

addIcons(HiTrash, LaStickyNote)

const app = createApp(App)
app.component('v-icon', OhVueIcon)

app.mount('#app')
