const initialState={
    vulnerabilityData:[]
}

export const fetchVulnerabilityTableData=(state=initialState, action)=>{
    switch(action.type){
        case "FETCH_VULNERABILITY_DATA":
            return {
                ...state,
                vulnerabilityData:action.payload
            }
        default:
            return state
    }
}
