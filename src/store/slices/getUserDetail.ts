import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import type { userDetail } from "types";

export const getUserDetail = createAsyncThunk(
  "users/getUserDetail",
  async (userName: string) => {

    const resUser: any = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    const resRepos: any = await axios.get(
      `https://api.github.com/users/${userName}/repos`
    );
    const resOrgs: any = await axios.get(
      `https://api.github.com/users/${userName}/orgs`
    );
    const user = {
      id: resUser.data.id,
      name: resUser.data.name,
      login: resUser.data.login,
      avatar_url: resUser.data.avatar_url,
      repos: resRepos.data,
      orgs: resOrgs.data,
    };
    console.log(user);
    return user as userDetail;
  }
);

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    id: 0,
    name: "",
    login: "",
    avatar_url: "",
    repos: [],
    orgs: [],
  } as userDetail,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserDetail.fulfilled, (state: userDetail, action) => {
      return (state = action.payload);
    });
  },
});
