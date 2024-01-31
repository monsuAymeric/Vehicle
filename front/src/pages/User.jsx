import React, { useState, useEffect } from "react";
import "./User.css";

export default function User() {
  const [user, setUser] = useState(null); // User state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assume you have a way to get the user's authentication status (e.g., from a login status or token)
        const isAuthenticated = true; // Replace with your authentication logic

        if (isAuthenticated) {
          const response = await fetch("http://localhost:3000/user-info"); // Replace with your actual user info endpoint
          const userData = await response.json();
          setUser(userData);
        } else {
          setError("User not authenticated");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching user data");
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section>
        <h1>User page:</h1>

        {error ? (
          // Render error message if there's an error
          <div className="error__message">{error}</div>
        ) : (
          // Render user information if user is authenticated
          <div className="user__container">
            <div className="user__infos">
              <b>First name:</b>
              <p>{user?.firstName}</p>
            </div>
            <div className="user__infos">
              <b>Last name:</b>
              <p>{user?.lastName}</p>
            </div>
            <div className="user__infos">
              <b>Email:</b>
              <p>{user?.email}</p>
            </div>

            <div className="user__commands">
              <h2>Commande(s):</h2>
              <ul>
                {user?.commands.map((command) => (
                  <li key={command.id}>{command.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
