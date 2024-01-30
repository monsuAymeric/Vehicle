import React, { useState, useRef } from "react";

export default function FormSignIn() {
  const inputRef = useRef(null);
  const handleSubmitButton = () => {
    alert(inputRef.current.value);
  };

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
    console.log("Form submitted:", formData);
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
