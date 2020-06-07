import React from "react";
import UserItem from "./UserItem";

function UserContainer({ users }) {
  return (
    <div className="row justify-content-center m-auto">
      {users.map((item, i) => {
        return <UserItem data={item} key={i} />;
      })}
    </div>
  );
}

export default UserContainer;
