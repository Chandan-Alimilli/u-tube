import { configure } from "@testing-library/react";
import appSlice from "./appSlice";

const store = configure({
  reduce: {
    app: appSlice,
  },
});

export default store;
