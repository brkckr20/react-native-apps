import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        selectedJob: "",
        favoriteJobs: []
    },
    reducers: {
        changeJob: (state, action) => {
            state.selectedJob = action.payload
        },
        addFavorite: (state, action) => {
            state.favoriteJobs.push(action.payload)
        }
    },
    extraReducers: {}
})

export const { changeJob, addFavorite } = jobSlice.actions

export default jobSlice.reducer