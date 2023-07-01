<template>
  <h1>Login With Azure</h1>
  <button class="btn btn-primary" @click="login">Login</button>
</template>

<!-- Option API -->
<script lang="ts">
  import { defineComponent } from 'vue'
  import { PublicClientApplication } from '@azure/msal-browser'
  import AzureService from '@/services/AzureService'

  export default defineComponent({
    name: 'AzureView',
    data() {
      return {
        account: ''
      }
    },
    async created() {
      const azureService = new AzureService()
      this.$msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
    },
    methods: {
      async login() {
        await this.$msalInstance.loginPopup({})
          .then(() => {
            const myAccounts = this.$msalInstance.getAllAccounts()
            this.account = myAccounts[0]
            this.$emitter.emit('login', this.account)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  })
</script>

<!-- Composition API -->
<!-- <script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import { PublicClientApplication } from '@azure/msal-browser'
  import AzureService from '@/services/AzureService'

  export default defineComponent({
    name: 'AzureView',
    setup() {
      onMounted(() => {
        const azureService = new AzureService()
        $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
      })

      let account = ''
      const login = async () => {
        await $msalInstance.loginPopup({})
          .then(() => {
            const myAccounts = $msalInstance.getAllAccounts()
            account = myAccounts[0]
            $emitter.emit('login', account)
          })
          .catch(error => {
            console.log(error)
          })
      }

      return {
        account, login
      }
    }
  })
</script> -->

<!-- Composition API setup -->
<!-- <script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import { PublicClientApplication } from '@azure/msal-browser'
  import AzureService from '@/services/AzureService'

  onMounted(() => {
    const azureService = new AzureService()
    $msalInstance = new PublicClientApplication(azureService.getMsalConfig().value)
  })

  let account = ''
  const login = async () => {
    await $msalInstance.loginPopup({})
      .then(() => {
        const myAccounts = $msalInstance.getAllAccounts()
        account = myAccounts[0]
        $emitter.emit('login', account)
      })
      .catch((error:any) => {
        console.log(error)
      })
  }
</script> -->