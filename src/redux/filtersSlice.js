import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: "filters",
    initialState: "",
    redusers: {
        setFilter(state, action) {
            
        }
    }
})

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.redusers;