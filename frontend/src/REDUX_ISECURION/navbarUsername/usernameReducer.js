const initialState={
    username:''
}

const setUsernameReducer=(state=initialState, action)=>{
    switch(action.type){
        case "SET_USERNAME":
            return{
                ...state,
                username:action.payload
            }
        default:
            return state
    }
}

export default setUsernameReducer
