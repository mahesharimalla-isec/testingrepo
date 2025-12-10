const initialState = {
  projectStatus: '',
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROJECT_STATUS':
      return {
        ...state,
        projectStatus: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;

