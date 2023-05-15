import { ref, Ref } from 'vue'
import IPost from '@/interfaces/IPost'

class PostService {
  private posts:Ref<Array<IPost>>

  constructor() {
    this.posts = ref<Array<IPost>>([])
  }

  public getPosts():Ref<Array<IPost>> {
    return this.posts
  }

  public async fetchAllPosts():Promise<void> {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      
      const response = await fetch(url)
      const json = await response.json()

      this.posts.value = await json
    } catch (error) {
      console.log(error)
    }
  }
}

export default PostService