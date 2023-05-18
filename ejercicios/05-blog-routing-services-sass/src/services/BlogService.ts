import { ref, Ref } from 'vue'
import IPost from '@/interfaces/IPost'

class BlogService {
  private posts:Ref<Array<IPost>>
  private post:Ref<IPost>

  public constructor() {
    this.posts = ref<Array<IPost>>([])
    this.post = ref<IPost>({})
  }

  public getPosts():Ref<Array<IPost>> {
    return this.posts
  }

  public getPost():Ref<IPost> {
    return this.post
  }

  public async fetchAllPosts():Promise<void> {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const response = await fetch(url)
      const result = await response.json()
      this.posts.value = await result
    } catch (error) {
      console.log(error)
    }
  }

  public async fetchPostById(id:any):Promise<void> {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`
      const response = await fetch(url)
      const result = await response.json()
      
      this.post.value = await result
    } catch (error) {
      console.log(error)
    }
  }
}

export default BlogService