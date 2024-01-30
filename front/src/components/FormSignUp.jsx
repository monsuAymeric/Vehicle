import React, { useState } from "react";
import "./FormSignUp.css";

export default function FormSignUp() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
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
    console.log("Form submitted:", formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Last Name:
        <input
          className="btn__inversed"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          autoComplete="Last Name"
        />
      </label>
      <label>
        First Name:
        <input
          className="btn__inversed"
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          autoComplete="First Name"
        />
      </label>
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
      <button className="btn" type="submit">Sign Up</button>
    </form>
  );
}
