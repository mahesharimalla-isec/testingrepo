import { ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILURE } from './addprojectActions';

const initialState = {
    loading: false,
    projectData: null,
    errorMessage: null,
};

const projectReducerProject = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT_REQUEST:
            return { ...state, loading: true };
        case ADD_PROJECT_SUCCESS:
            return { ...state, loading: false, projectData: action.payload };
        case ADD_PROJECT_FAILURE:
            return { ...state, loading: false, errorMessage: action.payload };
        default:
            return state;
    }
};

export default projectReducerProject;
