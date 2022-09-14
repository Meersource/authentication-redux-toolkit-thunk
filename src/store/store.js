import authSlice from "./slices/authSlice";
import mealSlice from "./slices/mealSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  auth: authSlice,
  meal: mealSlice
});
const persistReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducers,
});

export const persistor = persistStore(store);
