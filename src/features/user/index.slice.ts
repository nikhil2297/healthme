import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./intialState";

const slice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setFullName: (state, action) => {
            state.fullName = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setHeight: (state, action) => {
            state.height = action.payload;
        },
        setWeight: (state, action) => {
            state.weight = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        }
    }
});

const userReducer = slice.reducer;

export const { setUsername, setEmail, setFullName, setFirstName, setLastName, setHeight, setWeight, setAge } = slice.actions;

export const selectUser = (state) => state.user;

export default userReducer;