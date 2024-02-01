import express from "express";
import { Pool } from "pg";
import "./classes";

const app = express();
const port = 3000;

const pool = new Pool({
  user: "postgres", // Your database user
  host: "localhost", // Your database host (localhost if the database is on the same machine)
  database: "postgres", // Your database name
  password: "passworddb", // Your database password
  port: 5432, // Your database port (5432 is the default for PostgreSQL)
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
  pool.end();
});

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
