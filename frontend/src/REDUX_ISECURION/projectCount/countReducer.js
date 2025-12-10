const initialState= {
    inProgressCount: 0,
    retestingCount: 0,
    completedCount: 0,
    totalProjectsCount: 0
}

const countReducer=(state=initialState, action)=>{
    switch(action.type) {
        case 'SET_INPROGRESS_COUNT' :
            return {
                ...state,
                inProgressCount: action.payload
            }
        case 'SET_RETESTING_COUNT' :
            return {
                ...state,
                retestingCount: action.payload
            }
        case 'SET_COMPLETED_COUNT' :
            return {
                ...state,
                completedCount: action.payload
            }
        case 'SET_TOTALPROJECTS_COUNT' :
            return {
                ...state,
                totalProjectsCount: action.payload
            }
        default :
            return state
    }
}

export default countReducer
