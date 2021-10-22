import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import type { user } from "types";

export const getUsersList = createAsyncThunk(
  "users/getUsersList",
  async (userName: string) => {
    const res: any = await axios.get(
      `https://api.github.com/search/users?q=${userName}`
    );
    return res.data.items as user[];
  }
);

export const usersListSlice = createSlice({
  name: "usersList",
  initialState: [] as user[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state: user[], action) => {
      return (state = action.payload);
    });
  },
});
