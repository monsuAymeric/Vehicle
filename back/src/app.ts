import express from "express";
import { Pool } from "pg";

const app = express();
const port = 3000;

// PostgreSQL configuration
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
  pool.end();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

//--- Classes ---

//Users class
class Users {
  Id: number;
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;

  constructor() {
    this.Id = 0;
    this.Firstname = "";
    this.Lastname = "";
    this.Email = "";
    this.Password = "";
  }
}

//Command class
class Command {
  Id: number;
  IsValid: Boolean;
  PlaceDelivery: string;
  Status: string;

  constructor() {
    this.Id = 0;
    this.IsValid = true;
    this.PlaceDelivery = "";
    this.Status = "";
  }
}

//--- Factory ---

//Factory class
class Factory {
  Id: number;
  Name: string;
  Engine: string;
  Color: string;

  constructor() {
    this.Id = 0;
    this.Name = "";
    this.Engine = "";
    this.Color = "";
  }
}

//--- Creators classes ---

//CybertruckCreator class
class CybertruckCreator {
  Id: number;
  Name: string;
  Engine: string;
  Color: string;

  constructor() {
    this.Id = 0;
    this.Name = "";
    this.Engine = "";
    this.Color = "";
  }
}

//ModelSCreator class
class ModelSCreator {
  Id: number;
  Name: string;
  Engine: string;
  Color: string;

  constructor() {
    this.Id = 0;
    this.Name = "";
    this.Engine = "";
    this.Color = "";
  }
}

//ModelXCreator class
class ModelXCreator {
  Id: number;
  Name: string;
  Engine: string;
  Color: string;

  constructor() {
    this.Id = 0;
    this.Name = "";
    this.Engine = "";
    this.Color = "";
  }
}

//--- Interface ---
//Car class
interface Car {}
