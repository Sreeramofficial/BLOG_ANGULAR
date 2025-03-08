import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiError from "./Components/ApiError";

function UserDetails() {
  const [users, updateUser] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/getUser");
      console.log(result.data);
      updateUser(result.data);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      {/* cant use if statement directly inside jsx */}
      {error ? (
        <ApiError></ApiError>
      ) : (
        users.map((user, k) => (
          <div>
            <h6 key={k}>{user.name}</h6>
          </div>
        ))
      )}
    </div>
  );
}

export default UserDetails;
