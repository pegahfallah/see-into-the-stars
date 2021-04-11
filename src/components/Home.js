import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import StarfieldAnimation from "react-starfield-animation";

export default function Home() {
  return (
    <div className="container">
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      ></StarfieldAnimation>

      <div class="sign">
        <Link to="/nasaphoto">
          <span class="fast-flicker">See Into The Stars </span>
        </Link>
      </div>
    </div>
  );
}
