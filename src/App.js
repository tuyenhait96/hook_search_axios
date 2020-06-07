import React, { useState } from "react";
import { Spinner } from "reactstrap";
import axios from "axios";
import Search from "./Components/Search";
import UserContainer from "./Components/UserContainer";

function App() {
  const [loading, setLoading] = useState(false);
  const [lstUser, setUser] = useState([]);

  const searchUser = async (query) => {
    console.log("qurey", query);

    setLoading(true);
    try {
      let queryData = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=1&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      );
      console.log(queryData);
      setUser(queryData.data.items);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  const content = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center mr-5">
          <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
        </div>
      );
    } else {
      return <UserContainer users={lstUser} />;
    }
  };
  return (
    <div className="container">
      <Search searchUser={searchUser} />
      {content()}
    </div>
  );
}

export default App;
