export function CounterWidget({
  counter,
  isLoading,
  isError,
  onIncrementBtnClick,
  onDecrementBtnClick,
  onResetBtnClick,
  onRetryBtnClick
}) {
  if (isLoading) {
    return (
      <div>
        <p>Загрузка...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <p>Ошибка</p>
        <button onClick={onRetryBtnClick}>Повторить</button>
      </div>
    )
  }
  return (
    <div>
      <p>{ counter }</p>
      <button onClick={onIncrementBtnClick}>+1</button>
      <button onClick={onDecrementBtnClick}>-1</button>
      <button onClick={onResetBtnClick}>Сбросить счетчик </button>
    </div>
  )
}
