import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Directiva simple v-font-size
app.directive('font-size', {
  beforeMount: (element) => {
    element.style.fontSize = '50px'
  }
})

// Directiva personalizada con valores v-custom-size="30"
app.directive('custom-size', {
  beforeMount: (element, binding) => {
    element.style.fontSize = `${binding.value}px`
  }
})

// Directiva personalizada con argumentos v-custom-size:md
app.directive('custom-size-arg', {
  beforeMount: (element, binding) => {
    let size = 18

    switch (binding.arg) {
      case 'sm':
        size = 10
        break
      case 'md':
        size = 18
        break
      case 'lg': 
        size = 26
        break
      case 'xl':
        size = 34
        break
      case 'xxl':
        size = 42
        break
    }

    element.style.fontSize = `${size}px`
  }
})

// Directiva personalizada con modificadores v-custom-font.xxl.red
app.directive('custom-font', {
  beforeMount: (element, binding) => {
    let size = 18
    let color = 'red'

    if (binding.modifiers.sm) {
      size = 10
    } else if (binding.modifiers.md) {
      size = 18
    } else if (binding.modifiers.lg) {
      size = 26
    } else if (binding.modifiers.xl) {
      size = 34
    } else if (binding.modifiers.xxl) {
      size = 42
    }

    element.style.fontSize = `${size}px`

    if (binding.modifiers.red) {
      color = 'red'
    } else if (binding.modifiers.green) {
      color = 'green'
    } else if (binding.modifiers.blue) {
      color = 'blue'
    }

    element.style.color = color
  }
})

app.mount('#app')
