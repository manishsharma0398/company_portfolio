import React from "react";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-page">
      <h2>Error 404: Page Not Found</h2>
      <p>
        Press{" "}
        <Link to="/" style={{ textDecoration: "underline" }}>
          Here
        </Link>{" "}
        to go Home
      </p>
    </div>
  );
}

export default NotFound;
