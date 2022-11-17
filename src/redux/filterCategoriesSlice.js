import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
};

export const filterSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setFilterCategories(state, { payload }) {
            state.category = payload;
        }
    }
});

export const { setFilterCategories } = filterSlice.actions;