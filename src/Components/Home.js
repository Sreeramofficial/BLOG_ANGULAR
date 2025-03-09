import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ApiError.css"; // Go up one level from Components and go into Styles
import { Link } from "react-router-dom";
import axios from "axios";
import ApiError from "./ApiError";
import Navbar from "./Navbar";
import Footer from "./Footer";

function HomePage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/getUser`);
      setLoading(false); // Set loading to false when data is loaded successfully
    } catch (error) {
      console.error("Error fetching users:", error); // Log actual error message
      setError(true);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        <div>Loading...</div> // Show loading text or spinner while data is being fetched
      ) : error ? (
        <ApiError />
      ) : (
        <div className="ApiError">
          <div className="jumbotron">
            <h1 className="display-4">Hello Blogger</h1>
            <p className="lead">Welcome to Saturn Blogger.com</p>
            <p>We are happy to see you here again... Keep blogging!</p>
            <p className="lead">
              <Link className="btn btn-outline-primary" to={"/publicposts"}>
                SEE PUBLIC{" "}
              </Link>
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default HomePage;
