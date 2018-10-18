import React from "react";
import NotFoundImage from "../assets/404.png";

const NotFound = () => {
  return (
    <div>
      <h1>Page not Found</h1>
      <img src={NotFoundImage} alt="Page not found" />
    </div>
  );
};

export default NotFound;
