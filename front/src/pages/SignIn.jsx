import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import FormSignIn from "../components/FormSignIn";

export default function SignIn() {
  return (
    <main>
      <section className="signin__section">
        <div className="already__signin">
          <h1>Sign In</h1>
          <div className="redirection__sign">
            <p>Do you not have an account?</p>
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
        <FormSignIn />
      </section>
    </main>
  );
}
