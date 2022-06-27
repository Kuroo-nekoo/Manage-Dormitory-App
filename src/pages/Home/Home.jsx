import * as React from "react";
import * as jose from "jose";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <h1>Home</h1>
  )
};

export default Home;
