const initialState = {
    projectData: []
}

const setClientProjectReducer = (state = initialState, action) => {
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

export default setClientProjectReducer
