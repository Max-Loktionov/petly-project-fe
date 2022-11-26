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
      };
    },
    toggleFavorited(state, action) {
      for (const notice of state) {
        if (notice.id === action.payload) {
          notice.favorite = !notice.favorite;
          break;
        }
      }
    },

    getUserNotice(state, action) {
      return {
        ...state,
        userNotice: action.payload,
      };
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
