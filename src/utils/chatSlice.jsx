import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "live chat",
    initialState: {
        Message: []
    },
    reducers: {
        // Push ka ulta hai Unshift
        addMessage: (state, action) => {
            state.Message.splice(10, 1)
            state.Message.push(action.payload); // Append the new message to the existing array
        }
    }
});

export const {addMessage} = chatSlice.actions
export default chatSlice.reducer