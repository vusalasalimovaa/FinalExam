import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../services/product.js";
import favReducer from "./FavSlice.js";
import basketReducer from "./BasketSlice.js"

export const store = configureStore({
  reducer: {
    fav:favReducer,
    basket:basketReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
