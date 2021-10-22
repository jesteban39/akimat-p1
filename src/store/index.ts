import { configureStore } from "@reduxjs/toolkit";

import { usersListSlice } from "./slices/getUsersList";
import { userDetailSlice } from "./slices/getUserDetail";


const store = configureStore({
  reducer: {
    usersList: usersListSlice.reducer,
    userDetail: userDetailSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
