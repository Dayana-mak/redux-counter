import { 
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_RESET
} from './constants'

const initialState = {
  value: 0
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
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