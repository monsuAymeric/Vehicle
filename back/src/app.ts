import express from "express";
import { Pool } from "pg";
import "./classes";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

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

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

//Select User
app.get("/users", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    console.log("Datas from database:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Fetch error datas:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Select models
app.get("/models", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM models");
    console.log("Datas from database:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Fetch error datas:", error);
    res.status(500).json({ error: "Server error" });
  }
});
// Select Colors
app.get("/colors", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM colors");
    console.log("Datas from database:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Fetch error datas:", error);
    res.status(500).json({ error: "Server error" });
  }
});
// Select Adresses
app.get("/adress", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM adress");
    console.log("Datas from database:", result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error("Fetch error datas:", error);
    res.status(500).json({ error: "Server error" });
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
