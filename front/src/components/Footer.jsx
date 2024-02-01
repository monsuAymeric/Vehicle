import React from "react";
import "./Footer.css";
import Logo from "../components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Vehicle © {currentYear}</p>
      <Logo />
    </footer>
  );
}
