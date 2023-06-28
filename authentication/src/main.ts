import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDo_kw4nvY3rvba13qU58mNiqs_pLR2W3Y",
  authDomain: "curso-vue-d8fa2.firebaseapp.com",
  projectId: "curso-vue-d8fa2",
  storageBucket: "curso-vue-d8fa2.appspot.com",
  messagingSenderId: "418213786769",
  appId: "1:418213786769:web:1089f92d92081c325cbb30",
  measurementId: "G-LN1R2B11G5"
}

initializeApp(firebaseConfig)
createApp(App).use(router).mount('#app')
