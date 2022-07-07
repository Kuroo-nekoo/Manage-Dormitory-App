import * as React from "react";
import * as jose from "jose";

import Carousel from '../../components/Carousel'

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <Carousel></Carousel>
    </div>
  )
};

export default Home;
