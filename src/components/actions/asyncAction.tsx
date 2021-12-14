import { addPostAction } from '../redux/redux'

export const fetchPost = () => {
  return (dispatch: any) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => dispatch(addPostAction(json)))
  }
}
