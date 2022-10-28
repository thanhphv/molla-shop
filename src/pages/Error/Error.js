import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-wrapper">
      <h1>Error 404</h1>
      <p>We are sorry, the page you've requested is not available.</p>
      <button>
        <Link to="/">
          BACK TO HOME PAGE <i class="fas fa-arrow-right"></i>
        </Link>
      </button>
    </div>
  );
};

export default Error;
