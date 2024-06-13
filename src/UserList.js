import React, { useEffect, useState } from "react";
import axios from "axios";


const UserList = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("err", error);
      });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {Users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;