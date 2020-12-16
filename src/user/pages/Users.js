import React from "react";
import UserList from "../components/UserList/UserList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "PrashantBankoti",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
