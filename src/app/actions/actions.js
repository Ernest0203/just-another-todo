export const addItem = arg => dispatch => {
  dispatch({
    type: 'ADD_ITEM',
    data: arg
  })
}

export const removeItem = arg => dispatch => {
  dispatch({
    type: 'REMOVE_ITEM',
    data: arg
  })
}

export const getInputValue = arg => dispatch => {
  dispatch({
    type: 'GET_INPUT_VALUE',
    data: arg
  })
}
