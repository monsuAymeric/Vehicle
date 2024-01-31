import React, { useState, useEffect } from "react";
import "./User.css";
// import commands from "../datas/Command.json";

export default function User() {
  //--- Fetch commands datas ----
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/command/:id");
        const data = await response.json();
        setCommands(data);
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
            <p>Elon</p>
          </div>
          <div className="user__infos">
            <b>Last name:</b>
            <p>Musk</p>
          </div>
          <div className="user__infos">
            <b>Email:</b>
            <p>elonmusk@tesla.com</p>
          </div>
        </div>
        <div className="user__commands">
          <h2>Commande(s):</h2>
          <ul>
            {commands.map((command) => (
              <li key={command.id}>{command.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
