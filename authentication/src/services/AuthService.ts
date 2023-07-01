import { Ref, ref } from 'vue'

class AuthService {
  private jwt:Ref<string>
  private error:Ref<string>

  constructor() {
    this.jwt = ref('')
    this.error = ref('')
  }

  getJWT():Ref<string> {
    return this.jwt
  }

  getError():Ref<string> {
    return this.error
  }

  async login(email:string, password:string):Promise<boolean> {
    try {
      const response = await fetch('https://hfp69ilv.directus.app/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      const result = await response.json()

      if ('errors' in result) {
        this.error.value = 'Login Failed'
        return false
      }

      this.jwt.value = result.data.access_token
      // Cookies
      // $cookies.set('auth', this.jwt.value)
      // Sessions
      $session.start()
      $session.set('auth', this.jwt.value)
      return true

    } catch (error) {
      this.error.value = 'Login Failed'
      return false
    }
  }
}

export default AuthService
