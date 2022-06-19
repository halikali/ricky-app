import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
  totalPage: 1,
  activePage: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { setTotalPage, setActivePage } = pageSlice.actions;
export default pageSlice.reducer;
