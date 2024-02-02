import React, { useState, useEffect } from "react";
import "./User.css";

export default function User() {

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        
        if (data && data.length > 0) {
          const userWithIdOne = data.find(user => user.iduser === 1);
          setUser(userWithIdOne || {});
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section>
        <h1>User page:</h1>
          <div className="user__container">
            <div className="user__infos">
              <b>First name:</b>
              <p>{user.firstname}</p>
            </div>
            <div className="user__infos">
              <b>Last name:</b>
              <p>{user.lastname}</p>
            </div>
            <div className="user__infos">
              <b>Email:</b>
              <p>{user.email}</p>
            </div>

            <div className="user__commands">
              <h2>Commande(s):</h2>
              {/* <ul>
                {user?.commands.map((command) => (
                  <li key={command.id}>{command.name}</li>
                ))}
              </ul> */}
            </div>
          </div>
      </section>
    </main>
  );
}
