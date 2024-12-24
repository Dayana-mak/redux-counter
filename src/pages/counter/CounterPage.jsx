import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  load
} from './actions'
import { 
  getCounter,
  getIsLoading,
  getIsError
} from "./selectors";
import { CounterWidget } from "../../components/CounterWidget/CounterWidget";
import { useEffect } from "react";

function CounterPage() {
  const counter = useSelector(getCounter);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);
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

  const handleRetryBtnClick = () => {
    dispatch(load())
  }
  

  return (
    <div>
      <CounterWidget 
        counter={counter}
        isLoading={isLoading}
        isError={isError}
        onIncrementBtnClick={handleIncrementBtnClick}
        onDecrementBtnClick={handleDecrementBtnClick}
        onResetBtnClick={handleResetBtnClick}
        onRetryBtnClick={handleRetryBtnClick}/>
    </div>
  )
}

export default CounterPage
