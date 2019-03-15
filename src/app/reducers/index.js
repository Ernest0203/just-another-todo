const initialState = {
  data: [],
  inputValue: '',
};

const general = (state = initialState, action) => {
  switch(action.type) {

    case 'ADD_ITEM':
      if (!action.data) return { ...state };
      const newData = [ ...state.data ];
      const item = { id: Math.floor(Math.random()*100000), text: action.data };
      newData.splice(-newData.length, 0, item);
      return { ...state, data: newData }
    
    case 'REMOVE_ITEM':
      const updatedData = state.data.filter((item) => item.id !== action.data);
      return { ...state, data: updatedData}

    case 'GET_INPUT_VALUE':
      return { ...state, inputValue: action.data}
    
    default:
      return state;
  }
}

export default general;