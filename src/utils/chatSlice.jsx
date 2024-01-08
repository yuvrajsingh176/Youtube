import { createSlice } from "@reduxjs/toolkit";
import { offsetLiveChat } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages:[]
    },
    reducers: {
        addChat: (state, action) => {
            state.messages.splice(offsetLiveChat, 1);
            state.messages.unshift(action.payload);
        }
    }
})
export default chatSlice.reducer;
export const { addChat } = chatSlice.actions;
