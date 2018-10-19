import React from "react";
import NotFoundImage from "../assets/404.png";

const NotFound = () => {
  return (
    <ul>
      <div className="title">
        <h1>Page not Found</h1>
      </div>
      <div className="row">
        <div className="card">
          <img src={NotFoundImage} alt="Page not found" />
        </div>
      </div>
    </ul>
  );
};

export default NotFound;
