const initialState={
    uploadedFiles:[]
}

const documentReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_ALL_DOCUMENTS':
            return {
                ...state,
                uploadedFiles: action.payload
            }
        default:
            return state
    }
}

export default documentReducer
