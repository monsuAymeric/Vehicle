import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import FormSignIn from "../components/FormSignIn";

export default function SignIn() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated (you may replace this with actual authentication logic)
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuthStatus === "true");
  }, []);

  return (
    <main>
      <section className="signin__section">
        <div className="already__signin">
          {isAuthenticated ? (
            <p>You are connected.</p>
          ) : (
            <>
              <h1>Sign In</h1>
              <div className="redirection__sign">
                <p>Do you not have an account?</p>
                <Link className="link" to="/signup">
                  Sign Up
                </Link>
              </div>
            </>
          )}
        </div>
        {!isAuthenticated && (
          <FormSignIn setIsAuthenticated={setIsAuthenticated} />
        )}
      </section>
    </main>
  );
}
