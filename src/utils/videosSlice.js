import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videos:null
    },
    reducers: {
        addVideoContent: (state, action) => {
            state.videos = action.payload;
        }
    }
})
export default videoSlice.reducer;

export const { addVideoContent } = videoSlice.actions;