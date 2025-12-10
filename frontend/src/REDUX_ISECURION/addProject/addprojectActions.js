import axios from "axios";
import { toast } from "react-toastify";

export const ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export const addProjectRequest = () => ({
    type: ADD_PROJECT_REQUEST,
});

export const addProjectSuccess = (projectData) => ({
    type: ADD_PROJECT_SUCCESS,
    payload: projectData,
});

export const addProjectFailure = (errorMessage) => ({
    type: ADD_PROJECT_FAILURE,
    payload: errorMessage,
});

export const addProject = (projectData) => async (dispatch) => {
    dispatch(addProjectRequest());
    try {
        const response = await axios.post("http://18.207.195.77:5050/addproject", projectData);
        dispatch(addProjectSuccess(response.data));
        toast.success("Project added successfully...", {
            position: "top-right",
            autoClose: 2500,
            pauseOnHover: false,
        });
    } catch (error) {
        dispatch(addProjectFailure(error.message));
        toast.error("Failed to add project.", {
            position: "top-right",
            autoClose: 2500,
            pauseOnHover: false,
        });
    }
};
