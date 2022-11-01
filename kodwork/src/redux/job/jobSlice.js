import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        selectedJob: ""
    },
    reducers: {
        changeJob: (state, action) => {
            state.selectedJob = action.payload
        }
    },
    extraReducers: {}
})

export const { changeJob } = jobSlice.actions

export default jobSlice.reducer