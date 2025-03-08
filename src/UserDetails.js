import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiError from "./Components/ApiError";
import { Link } from "react-router-dom";

function UserDetails() {
  const [users, updateUser] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/getUser`);
      console.log(result.data);
      updateUser(result.data);
    } catch (error) {
      setError(true);
    }
  };

  const deleteUser = async (id) => {
    const result = await axios.delete(`http://localhost:8080/deleteUser/${id}`);
    loadUsers();
  };

  return (
    <div>
      <Link type="button" className="btn btn-primary" to="/addUser">
        Add User
      </Link>
      <br></br>
      {/* cant use if statement directly inside jsx */}
      {error ? (
        <ApiError></ApiError>
      ) : (
        users.map((user, k) => (
          <div>
            <h6 key={k}>{user.name}</h6>
            <button
              style={{ marginRight: 20 }}
              type="button"
              class="btn btn-danger"
              onClick={() => deleteUser(user.id)}
            >
              Delete {user.name}
            </button>

            <Link
              type="button"
              className="btn btn-primary"
              to={`/updateUser/${user.id}`}
            >
              Update {user.name}
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default UserDetails;
