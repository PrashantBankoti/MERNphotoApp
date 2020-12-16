import React from "react";
import UserItem from "../UserItem/UserItem"

import "./UserList.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return <div className="center">No Users Found</div>;
  }
  return <ul className="users-list">
      {props.items.map(user=>{
          return <UserItem 
            key={user.id} 
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
      })}
  </ul>
};

export default UserList;
