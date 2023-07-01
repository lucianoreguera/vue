import { Ref, ref } from 'vue'
import IMsalConfig from '@/interfaces/IMsalConfig'

class AzureService {
  private msalConfig:Ref<IMsalConfig>
  private accessToken:Ref<string>

  constructor() {
    this.msalConfig = ref({
      auth: {
        clientId: '6655dcbb-b635-43ed-b005-acf64122a9ab',
        authority: 'https://login.microsoftonline.com/dc2ebfa4-9dbc-4518-9deb-a9e08bd15a86'
      },
      cache: {
        cacheLocation: 'localStorage'
      }
    })
    this.accessToken = ref('')
  }

  setAccessToken(token:string) {
    this.accessToken.value = token
  }

  getAccessToken():Ref<string> {
    return this.accessToken
  }

  getMsalConfig():Ref<IMsalConfig> {
    return this.msalConfig
  }
}

export default AzureService
