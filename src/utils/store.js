// import { configure } from "@testing-library/react";
// import appSlice from "./appSlice";

// const store = configure({
//   reducer: {
//     app: appSlice,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
