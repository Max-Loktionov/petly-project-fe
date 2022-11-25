import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "sell",
  filter: "",
  page: 1,
  per_page: 15,
  modalAddNotice: {
    active: false,
  },
  modalViewNotice: {
    active: false,
    id: null,
  },
};

export const noticeSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    changeCategory(state, action) {
      return {
        ...state,
        category: action.payload,
      };
    },
    changeFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
    changePage(state, action) {
      return {
        ...state,
        page: action.payload,
      };
    },
    changePerPage(state, action) {
      return {
        ...state,
        per_page: action.payload,
      };
    },
    changeModalAddNotice(state, action) {
      return {
        ...state,
        modalAddNotice: { ...state.modalViewNotice, active: !state.modalAddNotice.active },
      };
    },
    changeModalViewNotice(state, action) {
      return {
        ...state,
        modalViewNotice: { ...state.modalViewNotice, active: !state.modalViewNotice.active },
      };
    },
    changeModalNoticeId(state, action) {
      return {
        ...state,
        modalViewNotice: { ...state.modalViewNotice, id: action.payload },
      };
    },
  },
});

const noticeReducer = noticeSlice.reducer;
const noticeActions = noticeSlice.actions;

export { noticeReducer, noticeActions };
