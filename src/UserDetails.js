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
      <br />
      {error ? (
        <ApiError />
      ) : (
        <>
          <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
            Users List
          </h4>

          {users.map((user, k) => (
            <div
              style={{ backgroundColor: "red", margin: 50, paddingTop: 40 }}
              key={k}
            >
              <h6>{user.name}</h6>
              <button
                style={{ marginRight: 20 }}
                type="button"
                className="btn btn-danger"
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
          ))}
          <div style={{ marginTop: 50 }}>
            <Link type="button" className="btn btn-primary" to="/addUser">
             Add User 
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default UserDetails;
