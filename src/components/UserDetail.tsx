import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { List, ListItemText } from "@mui/material";

import type { userDetail } from "types";
import { getUserDetail } from "../store/slices/getUserDetail";
import "./userDetail.css";

const UsersList = (props: { match: { params: { userName: string } } }) => {
  const dispatch = useDispatch();
  const user = useSelector(
    (state: { userDetail: userDetail }) => state.userDetail
  );
  useEffect(() => {
    console.log(props.match.params.userName);
    dispatch(getUserDetail(props.match.params.userName));
  }, []);

  return (
    <article className="container">
      <img src={user.avatar_url} alt="user image" />
      <div>
        <span>{user.login}</span>
        <span>{user.name}</span>
      </div>

      <List disablePadding>
        {user.repos.map((repo) => (
          <ListItemText primary={repo.name} />
        ))}
      </List>
      <List>
        {user.orgs.map((org) => (
          <ListItemText>
            <ListItemText primary={org.login}  secondary={org.description} />
          </ListItemText>
        ))}
      </List>
    </article>
  );
};
export default UsersList;
