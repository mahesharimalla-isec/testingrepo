const initialState= {
    projectRetest: ''
}

const clientRetestStatusReducer =(state= initialState, action)=>{
    switch(action.type) {
        case 'UPDATE_RETEST_STATUS' :
            return {
                ...state,
                projectRetest: action.payload
            }
        default:
            return state
    }
}

export default clientRetestStatusReducer
