import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ApiError.css"; // Go up one level from Components and go into Styles

function ApiError() {
  return (
    <div className="ApiError">
      <div class="jumbotron">
        <h1 class="display-4">Hello Blogger</h1>
        <p class="lead">
          We are facing some issues while fetching the information from Server
        </p>

        <p>Please contact administrator for further details</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="" role="button">
            Sign Out
          </a>
        </p>
      </div>
    </div>
  );
}

export default ApiError;
