import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./features/catsSlice";

const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
});

export default store;
