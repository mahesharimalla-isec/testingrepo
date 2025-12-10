const initialState = {
    uploadedFiles: []
}

const fetchDocumentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_UPLODED_DOCUMENTS":
            return {
                ...state,
                uploadedFiles: action.payload
            }
        default:
            return state

    }
}

export default fetchDocumentReducer
