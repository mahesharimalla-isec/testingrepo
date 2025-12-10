const initialState = 'Inprogress';

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return action.payload;
    default:
      return state;
  }
};

export default statusReducer;
