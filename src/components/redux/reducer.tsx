export const ADD_POST = 'ADD_POST',
  CURRENT_PAGE = 'CURRENT_PAGE',
  SINGLE_POST_ID = 'SINGLE_POST_ID',
  UPDATE_SINGLE_POST = 'UPDATE_SINGLE_POST',
  ID_POST = 'ID_POST',
  NEW_POST = 'NEW_POST',
  DELETE = 'DELETE',
  MODAL = 'MODAL'

interface initialStateType {
  post: Array<object>
  postPage: number
  postPerPage: number
  singlePost: object
  updateSinglePost: object
  idPost: number
  newPost: object
  modal: boolean
}

export const initialState: initialStateType = {
  post: [],
  postPage: 1,
  postPerPage: 10,
  singlePost: {},
  updateSinglePost: {},
  idPost: 0,
  newPost: {},
  modal: false,
}

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, post: [...state.post, ...action.payload] }
    case CURRENT_PAGE:
      return { ...state, postPage: action.payload }
    case SINGLE_POST_ID:
      return { ...state, singlePost: action.payload }
    case UPDATE_SINGLE_POST:
      return { ...state, updateSinglePost: action.payload }
    case ID_POST:
      return { ...state, idPost: action.payload }
    case NEW_POST:
      return { ...state, post: [action.payload, ...state.post] }
    case DELETE:
      return { ...state, post: action.payload }
    case MODAL:
      return { ...state, modal: action.payload }
    default:
      return state
  }
}
