import React from "react";
import ImageLogo from "../assets/logo.svg";

export default function Logo() {
  return (
    <div className="logo">
      <img src={ImageLogo} alt="logo" />
    </div>
  );
}
