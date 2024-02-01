import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import FormSignUp from "../components/FormSignUp";

export default function SignUp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated (you may replace this with actual authentication logic)
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuthStatus === "true");
  }, []);

  return (
    <main>
      <section className="signup__section">
        <div className="already__signup">
          {isAuthenticated ? (
            <p>You already have an account.</p>
          ) : (
            <>
              <h1>Sign Up</h1>
              <div className="redirection__sign">
                <p>Do you already have an account?</p>
                <Link className="link" to="/signin">
                  Sign In
                </Link>
              </div>
            </>
          )}
        </div>
        {!isAuthenticated && (
          <FormSignUp setIsAuthenticated={setIsAuthenticated} />
        )}
      </section>
    </main>
  );
}
