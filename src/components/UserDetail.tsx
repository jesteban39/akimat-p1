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
      <div>
        <img src={user.avatar_url} />
        <span>{user.login}</span>
        <span>{user.name}</span>
      </div>
      <div>
        <h2>Repositories</h2>
        <List disablePadding>
          {user.repos.map((repo) => (
            <ListItemText primary={repo.name} />
          ))}
        </List>
      </div>

      <div>
        <h2>Organizations</h2>
        <List>
          {user.orgs.map((org) => (
            <ListItemText>
              <ListItemText primary={org.login} secondary={org.description} />
            </ListItemText>
          ))}
        </List>
      </div>
    </article>
  );
};
export default UsersList;
