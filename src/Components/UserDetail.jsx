import React, { useEffect, useState } from "react";
// https://api.github.com/search/users?q=mostafa&page=1
import { useRouteMatch } from "react-router-dom";
import axios from "axios";
import Profile from "./Profile";
import Repos from "./Repos";

function UserDetail({ match }) {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  // const id = useRouteMatch()
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${match.params.userId}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then((res) => {
        // console.log(res);
        setUser(res.data);
      });
  }, [match.params.userId, user]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${match.params.username}/repos?per_page=10&sort=asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      )
      .then((res) => {
        console.log(res);
        setRepos(res.data);
      })
      .catch((err) => console.log(err));
  }, [match.params.username, repos]);
  return (
    <div className="container mt-5">
      <Profile user={user} />
      <h3 className="page-heading mb-3 mt-2">Latest Repos</h3>
      {repos.map((item, i) => {
        return <Repos repos={item} key={i} />;
      })}
    </div>
  );
}

export default UserDetail;
