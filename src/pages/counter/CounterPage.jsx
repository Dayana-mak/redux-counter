import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  load
} from './actions'
import { 
  getCounter
} from "./selectors";
import { CounterWidget } from "../../components/CounterWidget/CounterWidget";
import { useEffect } from "react";

function CounterPage() {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load());
  }, []);

  const handleIncrementBtnClick = () => {
    dispatch(increment())
  }

  const handleDecrementBtnClick = () => {
    dispatch(decrement())
  }

  const handleResetBtnClick = () => {
    dispatch(reset())
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
