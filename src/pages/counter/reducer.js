import { 
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_RESET,

  COUNTER_LOADING,
  COUNTER_LOADING_SUCCESS,
  COUNTER_LOADING_ERROR,
  
  COUNTER_SAVE_LOADING,
  COUNTER_SAVE_LOADING_SUCCESS,
  COUNTER_SAVE_LOADING_ERROR
} from './constants'

const initialState = {
  value: null,

  isLoading: false,
  isError: false,

  isSaveLoading: false,
  isSaveError: false,
  isSaveSuccess: false
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false
      }

    case COUNTER_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        value: action.payload
      }

    case COUNTER_LOADING_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      }

      case COUNTER_SAVE_LOADING:
        return {
          ...state,
          isSaveLoading: true,
          isSaveError: false,
          isSaveSuccess: false
        }
  
      case COUNTER_SAVE_LOADING_SUCCESS:
        return {
          ...state,
          isSaveLoading: false,
          isSaveSuccess: true
        }
  
      case COUNTER_SAVE_LOADING_ERROR:
        return {
          ...state,
          isSaveLoading: false,
          isSaveError: true
        }

    case COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }

    case COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }

    case COUNTER_RESET:
      return {
        ...state,
        value: 0
      }

    default:
      return {
        ...state
      }
  }
}