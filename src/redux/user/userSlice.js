import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
  userNotice: [],

  modalAddPets: {
    active: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getFavorite(state, action) {
      return {
        ...state,
        favorite: action.payload,
      };
    },

    addFavorite(state, action) {
      return {
        ...state,
        favorite: state.favorite.push(action.payload),
      };
    },

    getUserNotice(state, action) {
      return {
        ...state,
        userNotice: action.payload,
      };
    },

    unsetFavorite(state, action) {
      state.favorite = [];
    },

    unsetNotice(state, action) {
      state.userNotice = [];
    },

    changeModalAddPets(state, action) {
      return {
        ...state,
        modalAddPets: { ...state.modalAddPets, active: !state.modalAddPets.active },
      };
    },
  },
});

const userReducer = userSlice.reducer;
const userActions = userSlice.actions;

export { userReducer, userActions };
