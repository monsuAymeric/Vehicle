import express from "express";
import { Pool } from "pg";
import "./classes";

const app = express();
const port = 3000;

// Set up your database connection credentials.
const pool = new Pool({
  user: 'postgres',     // Your database user
  host: 'localhost',         // Your database host (localhost if the database is on the same machine)
  database: 'postgres', // Your database name
  password: 'passworddb', // Your database password
  port: 5432,                // Your database port (5432 is the default for PostgreSQL)
});

// Define the type for rows you expect to get from the database.

interface RowData {
  [key: string]: any;
}

const fetchData = async (sqlQuery: string): Promise<RowData[]> => {
  try {
    const client = await pool.connect();
    try {
      const res = await client.query(sqlQuery);
      return res.rows as RowData[];
    } finally {
      client.release(); // release connection
    }
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

export default fetchData;

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});