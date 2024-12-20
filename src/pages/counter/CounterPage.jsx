import { useDispatch, useSelector } from "react-redux"
import { 
  COUNTER_INCREMENT,
  COUNTER_DECREMENT 
} from './constants'
import { getCounter } from "./selectors";
import {
  increment,
  decrement,
  reset
} from './actions'
import { CounterWidget } from "../../components/CounterWidget/CounterWidget";

function CounterPage() {
  const counter = useSelector(getCounter);
  const dispath = useDispatch();

  const handleIncrementBtnClick = () => {
    dispath(increment())
  }

  const handleDecrementBtnClick = () => {
    dispath(decrement())
  }

  const handleResetBtnClick = () => {
    dispath(reset())
  }

  return (
    <div>
      <CounterWidget 
        counter={counter}
        onIncrementBtnClick={handleIncrementBtnClick}
        onDecrementBtnClick={handleDecrementBtnClick}
        onResetBtnClick={handleResetBtnClick}/>
    </div>
  )
}

export default CounterPage
