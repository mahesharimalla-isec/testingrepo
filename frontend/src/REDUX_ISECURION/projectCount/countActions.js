export const setInprogressCount =(count)=>{
    return {
        type: "SET_INPROGRESS_COUNT",
        payload: count
    }
}

export const setRetestingCount =(count)=>{
    return {
        type: "SET_RETESTING_COUNT",
        payload: count
    }
}

export const setCompletedCount=(count)=>{
    return {
        type: "SET_COMPLETED_COUNT",
        payload: count
    }
}

export const setTotalProjectsCount=(count)=>{
    return {
        type: "SET_TOTALPROJECTS_COUNT",
        payload:count
    }
}
