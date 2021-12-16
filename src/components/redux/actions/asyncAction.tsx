import { addPostAction, addSinglePost } from './actions'

const url = 'https://jsonplaceholder.typicode.com/'

export const fetchPost = () => {
  return (dispatch: any) => {
    fetch(`${url}posts`)
      .then(response => response.json())
      .then(json => dispatch(addPostAction(json)))
  }
}

export const fetchPhoto = () => {
  return (dispatch: any) => {
    fetch(`${url}photos`)
      .then(response => response.json())
      .then(json => dispatch(addPostAction(json)))
  }
}

export const fetchSinglePost = (id: any) => {
  return (dispatch: any) => {
    fetch(`${url}posts/${id}`)
      .then(response => response.json())
      .then(json => dispatch(addSinglePost(json)))
  }
}
