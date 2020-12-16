import React from "react";
import UserList from "../components/UserList/UserList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "PrashantBankoti",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
