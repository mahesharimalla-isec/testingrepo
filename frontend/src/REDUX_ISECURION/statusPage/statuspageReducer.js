const initialState = {
    projectData: []
}

const setProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_STATUS_PAGE":
            return {
                ...state,
                projectData: action.payload
            }
        default:
            return state

    }
}

export default setProjectReducer
