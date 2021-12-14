import { addPostAction } from '../redux/redux'
import { addSinglePost } from '../redux/redux'

export const fetchPost = () => {
  return (dispatch: any) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => dispatch(addPostAction(json)))
  }
}

export const fetchSinglePost = (id: number) => {
  return (dispatch: any) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => dispatch(addSinglePost(json)))
  }
}
