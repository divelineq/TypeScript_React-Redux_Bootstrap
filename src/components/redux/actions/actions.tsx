import {
  ADD_POST,
  CURRENT_PAGE,
  DELETE,
  ID_POST,
  NEW_POST,
  SINGLE_POST_ID,
  UPDATE_SINGLE_POST,
  MODAL,
  CAROUSEL_INDEX,
} from '../reducer'

export const addSinglePost = (payload: any) => ({
  type: SINGLE_POST_ID,
  payload,
})
export const paginate = (postNumber: any) => ({
  type: CURRENT_PAGE,
  payload: postNumber,
})
export const addUpdateSinglePost = (payload: any) => ({
  type: UPDATE_SINGLE_POST,
  payload,
})
export const addPostAction = (payload: any) => ({ type: ADD_POST, payload })
export const addIdPost = (payload: any) => ({ type: ID_POST, payload })
export const addNewPost = (payload: any) => ({ type: NEW_POST, payload })
export const deletePost = (payload: any) => ({ type: DELETE, payload })
export const showModal = (payload: boolean) => ({ type: MODAL, payload })
export const getIndex = (payload: number) => ({ type: CAROUSEL_INDEX, payload })
