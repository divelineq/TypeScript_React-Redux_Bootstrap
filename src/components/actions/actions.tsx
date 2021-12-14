export const addSinglePost = (payload: any) => ({
  type: 'SINGLE_POST_ID',
  payload,
})
export const addPostAction = (payload: any) => ({ type: 'ADD_POST', payload })

export const addUpdateSinglePost = (payload: any) => ({
  type: 'UPDATE_SINGLE_POST',
  payload,
})

export const addIdPost = (payload: any) => ({ type: 'ID_POST', payload })

export const paginate = (postNumber: any) => ({
  type: 'CURRENT_PAGE',
  payload: postNumber,
})

export const addNewPost = (payload: any) => ({ type: 'NEW_POST', payload })
export const deletePost = () => ({ type: 'DELETE' })
