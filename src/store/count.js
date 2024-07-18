import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
    count: 0
}

export const countSlice = createSlice({
    name: "count",
    initialState: DEFAULT_STATE,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})