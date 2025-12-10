import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inProgressCount: 0,
    retestingCount: 0,
    completedCount: 0,
    totalProjectsCount: 0,
};

export const projectCountSlice = createSlice({
    name: 'projectCount',
    initialState,
    reducers: {
        setInProgressCount: (state, action) => {
            state.inProgressCount = action.payload;
        },
        setRetestingCount: (state, action) => {
            state.retestingCount = action.payload;
        },
        setCompletedCount: (state, action) => {
            state.completedCount = action.payload;
        },
        setTotalProjectsCount: (state, action) => {
            state.totalProjectsCount = action.payload;
        },
        setProjectCounts: (state, action) => {
            const { inProgress, retesting, completed, total } = action.payload;
            state.inProgressCount = inProgress;
            state.retestingCount = retesting;
            state.completedCount = completed;
            state.totalProjectsCount = total;
        },
    },
});

export const {
    setInProgressCount,
    setRetestingCount,
    setCompletedCount,
    setTotalProjectsCount,
    setProjectCounts,
} = projectCountSlice.actions;

export default projectCountSlice.reducer;
