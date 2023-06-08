import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore } from "redux";

// Import your reducer function for handling state updates
import rootReducer from "./rootReducer";

// Configure Redux Persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
