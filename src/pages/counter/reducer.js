import { 
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_RESET,

  COUNTER_LOADING,
  COUNTER_LOADING_SUCCES,
  COUNTER_LOADING_ERROR,
} from './constants'

const initialState = {
  value: null,
  isLoading: false,
  isError: false
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false
      }

    case COUNTER_LOADING_SUCCES:
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