import React, { useState } from "react";

export default function FormSignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to handle form submission (e.g., API call, validation)
    // For simplicity, simulate a successful login
    setIsAuthenticated(true);

    // Persist the authentication status in localStorage
    localStorage.setItem("isAuthenticated", "true");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          className="btn__inversed"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="Email"
        />
      </label>
      <label>
        Password:
        <input
          className="btn__inversed"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="Password"
        />
      </label>
      <button className="btn" type="submit">
        Sign In
      </button>
    </form>
  );
}
