export const setInprogressCount =(clientCount)=>{
    return {
        type: "SET_INPROGRESS_COUNT",
        payload: clientCount
    }
}

export const setRetestingCount =(clientCount)=>{
    return {
        type: "SET_RETESTING_COUNT",
        payload: clientCount
    }
}

export const setCompletedCount=(clientCount)=>{
    return {
        type: "SET_COMPLETED_COUNT",
        payload: clientCount
    }
}

export const setTotalProjectsCount=(clientCount)=>{
    return {
        type: "SET_TOTALPROJECTS_COUNT",
        payload:clientCount
    }
}
