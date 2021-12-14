interface initialStateType {
  post: Array<any>
  payload?: any
  postPage: number
  postPerPage: number
  singlePost?: any
  updateSinglePost: any
  idPost: any
  newPost: any
}

export const initialState: initialStateType = {
  post: [],
  postPage: 1,
  postPerPage: 10,
  singlePost: {},
  updateSinglePost: {},
  idPost: 0,
  newPost: {},
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
    case 'ID_POST':
      return { ...state, idPost: action.payload }
    case 'NEW_POST':
      return { ...state, post: [action.payload, ...state.post] }
    case 'DELETE':
      return {}
    default:
      return state
  }
}
