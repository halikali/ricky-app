import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  totalPage: 0,
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getAllCharacters: (state) => {
      state.characters.push({
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
      });
    },
  },
});

export const { getAllCharacters, setTotalPage } = characterSlice.actions;

export default characterSlice.reducer;
