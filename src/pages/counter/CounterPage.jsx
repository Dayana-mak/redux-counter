import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  load,
  save
} from './actions'
import { 
  getCounter,
  getIsLoading,
  getIsError,
  getIsSaveSuccess,
  getIsSaveLoading,
  getIsSaveError
} from "./selectors";
import { CounterWidget } from "../../components/CounterWidget/CounterWidget";
import { useEffect } from "react";

function CounterPage() {
  const counter = useSelector(getCounter);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  const isSaveSuccess = useSelector(getIsSaveSuccess);
  const isSaveLoading = useSelector(getIsSaveLoading);
  const isSaveError = useSelector(getIsSaveError);

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

  const handleSaveBtnClick = () => {
    dispatch(save(counter))
  }
  

  return (
    <div>
      <CounterWidget 
        counter={counter}
        isLoading={isLoading}
        isError={isError}
        isSaveSuccess={isSaveSuccess}
        isSaveLoading={isSaveLoading}
        isSaveError={isSaveError}
        onIncrementBtnClick={handleIncrementBtnClick}
        onDecrementBtnClick={handleDecrementBtnClick}
        onResetBtnClick={handleResetBtnClick}
        onRetryBtnClick={handleRetryBtnClick}
        onSaveBtnClick={handleSaveBtnClick}/>
    </div>
  )
}

export default CounterPage
