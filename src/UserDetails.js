import React, { useEffect, useState } from "react";
import axios from "axios";

function UserDetails() {
  const [users, updateUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getUser");
    console.log(result.data);
    updateUser(result.data);
  };

  return (
    <div>
      <h4>User List</h4>
      {users.map(
        (user, k) => (
          <h6 key={k}>{user.name}</h6>
        ) 
      )}
    </div>
  );
}

export default UserDetails;
