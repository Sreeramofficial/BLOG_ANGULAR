import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ApiError.css"; // Ensure the path is correct for your styles
import { Link } from "react-router-dom";

function ApiError() {
  return (
    <div className="ApiError">
      <div className="text-center">
        {/* Correct way to reference an image in the public folder */}
        <img
          src="/ErrorCode.jpeg" // Correct path when the image is in the public folder
          className="rounded eroor-image"
          alt="Error"
        />
        <div style={{ marginTop: 50 }} className="card eroor-text">
          <div className="card-body">
            <div className="ApiError">
              <div className="jumbotron">
                <h1 className="display-4">Hello Blogger</h1>
                <p className="lead error-text">
                  We are facing some inssues while fetching your information
                </p>
                <p>
                  We are happy to see you here again... We will come back soon!
                </p>
                <p className="lead">
                  {/* <Link to={"/getActiveBloggers"}>
                    <a
                      className="btn btn-primary btn-lg"
                      href="#"
                      role="button"
                    >
                      Get Active Bloggers
                    </a>
                  </Link> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiError;
