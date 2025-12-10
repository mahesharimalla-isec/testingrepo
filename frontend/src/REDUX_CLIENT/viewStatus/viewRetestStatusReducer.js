const initialState= {
    matchedData: []
}

const viewActionReducer= (state= initialState, action)=>{
    switch (action.type){
        case "SET_MATCHED_STATUS" :
            return {
                ...state,
                matchedData: action.payload
            }
        default:
            return state
    }
}

export default viewActionReducer
