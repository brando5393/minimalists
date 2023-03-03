import React from "react";

const AppHeader = (props) => {
  // Destructure the props object to get the image URL
  const { image } = props;

  return (
    <div className="text-center">
      {/* Render the image passed as a prop */}
      <img src={image} alt="App Logo" className="img-fluid" />
      {/* Render the app title */}
      <h1>Welcome to Minimalists</h1>
      {/* Render the app description */}
      <p className="lead">A simple todo list app</p>
    </div>
  );
};

export default AppHeader;
