// import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./contants";

// const chatSlice = createSlice({
//   name: "chat",
//   initialState: {
//     messages: [],
//   },
//   reducers: {
//     addMessage: (state, action) => {
//       state.messages.splice(LIVE_CHAT_COUNT, 1);
//       state.messages.push(action.payload);
//     },
//   },
// });
// export const { addMessage } = chatSlice.actions;
// export default chatSlice.reducer;

// chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.push(action.payload);
    },
    // other reducers...
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
