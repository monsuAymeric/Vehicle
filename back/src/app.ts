import express from "express";
import { Pool } from "pg";
import "./classes";

const app = express();
const port = 3000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "passworddb",
  port: 5432,
});

// Test the database connection
pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("Error connecting to the database", err);
  } else {
    console.log(
      "Connected to the database. Current time: ",
      result.rows[0].now
    );
  }
  // Do not close pool here
});

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

// Select models
app.get("/models", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM models");
    console.log("Données reçues de la base de données:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Close pool
process.on("exit", () => {
  console.log("Closing database pool");
  pool.end();
});

process.on("SIGINT", () => {
  console.log("Interrupted, closing database pool");
  process.exit(0);
});