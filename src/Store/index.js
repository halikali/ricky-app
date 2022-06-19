import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { rickAndMortyApi } from "Services/RickAndMorty";
import characterReducer from "Slices/CharacterSlice";
import pageReducer from "Slices/PageSlice";

export const store = configureStore({
  reducer: {
    allCharacters: characterReducer,
    page: pageReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

setupListeners(store.dispatch);
