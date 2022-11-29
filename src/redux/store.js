import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { userApi } from "./userApi";
import { authApi } from "./auth";
import { noticesApi } from "./noticesApi";
import { persistedReducer } from "./auth";
import { noticeReducer } from "./notices/noticeSlice";
import { persistedUserReducer } from "./user";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [noticesApi.reducerPath]: noticesApi.reducer,
    auth: persistedReducer,
    notice: noticeReducer,
    user: persistedUserReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userApi.middleware,
    authApi.middleware,
    noticesApi.middleware,
  ],
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
