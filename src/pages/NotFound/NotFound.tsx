import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not__found-page">
      <div className="not__found-content">
        <h1 data-testId="not-found-text">404 Not Found</h1>
        <p>
          Oh no! It looks like the page you are trying to get to is missing!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
