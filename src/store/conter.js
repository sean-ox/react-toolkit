import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementConter: (state) => {
            state.count += 1;
        },
        decrementCounter: (state) => {
            state.count -= 1;
        },
        defaultValue: (state, action) => {
            state.count += action.payload;
        },
    },
});

export const { incrementConter, decrementCounter, defaultValue } =
    counterSlice.actions;

export default counterSlice.reducer;
