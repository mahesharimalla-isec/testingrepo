const initialState= {
    projects:[]
}

const fetchProjectsReducer=(state= initialState, action)=>{
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

export default fetchProjectsReducer
