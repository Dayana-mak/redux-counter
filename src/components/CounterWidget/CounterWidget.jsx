export function CounterWidget({
  counter,
  isLoading,
  isError,

  isSaveSuccess,
  isSaveLoading,
  isSaveError,

  onIncrementBtnClick,
  onDecrementBtnClick,
  onResetBtnClick,
  onRetryBtnClick,
  onSaveBtnClick
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
      <button onClick={onResetBtnClick}>Сбросить счетчик</button>
      <button disabled={isSaveLoading} onClick={onSaveBtnClick}>Сохранить счетчик</button>

      { isSaveLoading && <p>Сохраняю счетчик...</p> }
      { isSaveError && <p>Ошибка сохранения</p> }
      { isSaveSuccess && <p>Успешное сохранение</p> }
    </div>
  )
}
