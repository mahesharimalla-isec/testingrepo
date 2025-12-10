const initialState= {
    vulnerabilities: []
}

const fetchVulnerabilities=(state=initialState, action)=>{
    switch(action.type) {
        case 'SET_VULNERABILITY_LIST':
            return {
                ...state,
                vulnerabilities: action.payload
            }
        default:
            return state
    }
}

export default fetchVulnerabilities
