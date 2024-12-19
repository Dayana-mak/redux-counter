export function CounterWidget({
  counter,
  onIncrementBtnClick,
  onDecrementBtnClick
}) {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={onIncrementBtnClick}>+1</button>
      <button onClick={onDecrementBtnClick}>-1</button>
    </div>
  )
}
