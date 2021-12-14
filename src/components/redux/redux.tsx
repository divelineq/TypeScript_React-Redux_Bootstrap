interface initialStateType {
  post: Array<any>
  payload?: any
  postPage: number
  postPerPage: number
  singlePost?: any
  updateSinglePost: any
}

export const initialState: initialStateType = {
  post: [],
  postPage: 1,
  postPerPage: 10,
  singlePost: {},
  updateSinglePost: {},
}

export const reducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_POST':
      return { ...state, post: [...state.post, ...action.payload] }
    case 'CURRENT_PAGE':
      return { ...state, postPage: action.payload }
    case 'SINGLE_POST_ID':
      return { ...state, singlePost: action.payload }
    case 'UPDATE_SINGLE_POST':
      return { ...state, updateSinglePost: action.payload }
    default:
      return state
  }
}

export const addSinglePost = (payload: any) => ({
  type: 'SINGLE_POST_ID',
  payload,
})
export const addPostAction = (payload: any) => ({ type: 'ADD_POST', payload })

export const addUpdateSinglePost = (payload: any) => ({
  type: 'UPDATE_SINGLE_POST',
  payload,
})
