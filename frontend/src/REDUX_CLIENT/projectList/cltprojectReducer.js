const initialState= {
    projects:[]
}

const fetchClientProjectsReducer=(state= initialState, action)=>{
    switch(action.type){
        case "FETCH_PROJECT_LIST":
            return {
                ...state,
                projects: action.payload
            }
        default:
            return state
    }

}

export default fetchClientProjectsReducer
