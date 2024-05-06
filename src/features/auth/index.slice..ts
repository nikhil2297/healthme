import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload;
        },
        setTimeStamp: (state, action) => {
            state.timestamp = action.payload;
        }
    }
});

const authReducer = slice.reducer;

export const { setLoggedIn, setTimeStamp } = slice.actions;

export const selectLoggedIn = (state) => state.auth.loggedIn;
export const selectTimestamp = (state) => state.auth.timestamp;

export default authReducer;