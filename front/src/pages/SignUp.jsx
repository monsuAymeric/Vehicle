import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import FormSignUp from "../components/FormSignUp";

export default function SignUp() {
  return (
    <main>
      <section className="signup__section">
        <div className="already__signup">
          <h1>Sign Up</h1>
          <div className="redirection__sign">
            <p>Do you already have an account?</p>
            <Link className="link" to="/signin">
              Sign In
            </Link>
          </div>
        </div>
        <FormSignUp />
      </section>
    </main>
  );
}
