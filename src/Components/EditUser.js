import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  let navigate = useNavigate();
  const [users, updateUser] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  //to get current user from param
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updateUser/${id}`, user);
    navigate("/");
  };

  const loadUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/getUserBYId/${id}`);
      setUser(result.data);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sample Bootstrap Form</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name" // Important for input name matching state
            placeholder="Enter your name"
            value={name}
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email" // Important for input name matching state
            placeholder="Enter your email"
            value={email}
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password" // Important for input name matching state
            placeholder="Password"
            value={password}
            onChange={onInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUser;
