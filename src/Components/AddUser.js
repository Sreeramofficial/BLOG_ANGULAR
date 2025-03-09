import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AddUser() {
  let navigate = useNavigate();
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
    await axios.post("http://localhost:8080/addUser", user);
    navigate("/");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ flex: "1" }} // Take up remaining space, fill viewport height
      >
        <div
          className="container"
          style={{
            width: "500px", // Set width to 500px
            height: "auto", // Allow height to adjust based on content
            padding: "20px", // Padding for inner spacing
            border: "1px solid #ddd", // Optional border
            borderRadius: "8px", // Optional rounded corners
            backgroundColor: "#f8f9fa", // Light background color
          }}
        >
          <h2 className="text-center mb-4">Sample Bootstrap Form</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label
                style={{ paddingBottom: 10, paddingTop: 10 }}
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={onInputChange}
              />
            </div>

            <div className="form-group">
              <label
                style={{ paddingBottom: 10, paddingTop: 10 }}
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={onInputChange}
              />
            </div>

            <div className="form-group">
              <label
                style={{ paddingBottom: 10, paddingTop: 10 }}
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onInputChange}
              />
            </div>

            <button
              style={{ marginTop: 40 }}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddUser;
