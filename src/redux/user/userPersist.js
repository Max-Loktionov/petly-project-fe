import { persistReducer } from "redux-persist";
import { userSlice } from "./userSlice";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
  //   whitelist: ["token"],
};

export const persistedUserReducer = persistReducer(userPersistConfig, userSlice.reducer);
