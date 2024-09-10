import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./conter";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
