export const ADD_POST = 'ADD_POST',
  CURRENT_PAGE = 'CURRENT_PAGE',
  SINGLE_POST_ID = 'SINGLE_POST_ID',
  UPDATE_SINGLE_POST = 'UPDATE_SINGLE_POST',
  ID_POST = 'ID_POST',
  ID_PHOTO = 'ID_PHOTO',
  NEW_POST = 'NEW_POST',
  DELETE = 'DELETE',
  MODAL = 'MODAL',
  CAROUSEL_INDEX = 'CAROUSEL_INDEX',
  ADD_PHOTO = 'ADD_PHOTO',
  SINGLE_PHOTO_ID = 'SINGLE_POST_ID',
  LIKE = 'LIKE',
  COMMENT = 'COMMENT'

interface initialStateType {
  post: Array<object>
  photo: Array<object>
  postPage: number
  postPerPage: number
  singlePost: object
  updateSinglePost: object
  idPost: number
  idPhoto: number
  newPost: object
  modal: boolean
  carouselIndex: number
  like: boolean
  comment: Array<string>
}

export const initialState: initialStateType = {
  post: [],
  photo: [],
  postPage: 1,
  postPerPage: 10,
  singlePost: {},
  updateSinglePost: {},
  idPost: 0,
  idPhoto: 0,
  newPost: {},
  modal: false,
  carouselIndex: 0,
  like: false,
  comment: [],
}

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, post: [...state.post, ...action.payload] }
    case ADD_PHOTO:
      return { ...state, photo: [...state.photo, ...action.payload] }
    case CURRENT_PAGE:
      return { ...state, postPage: action.payload }
    case SINGLE_POST_ID:
      return { ...state, singlePost: action.payload }
    case UPDATE_SINGLE_POST:
      return { ...state, updateSinglePost: action.payload }
    case ID_POST:
      return { ...state, idPost: action.payload }
    case ID_PHOTO:
      return { ...state, idPhoto: action.payload }
    case NEW_POST:
      return { ...state, post: [action.payload, ...state.post] }
    case DELETE:
      return { ...state, post: action.payload }
    case MODAL:
      return { ...state, modal: action.payload }
    case CAROUSEL_INDEX:
      return { ...state, carouselIndex: action.pauload }
    case LIKE:
      return { ...state, like: !state.like }
    case COMMENT:
      return { ...state, comment: [...state.comment, action.payload] }
    default:
      return state
  }
}
