const initialState = {
    fetchedMessage: []
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MESSAGE':
            return {
                ...state,
                fetchedMessage: action.payload
            };
        default:
            return state
    }
}

export default messageReducer
