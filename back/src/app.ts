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
abstract class Factory {
  public abstract factoryMethod(): Car;

  Id: number = 0;
  Name: string = "";
  Engine: string = "";
  Color: string = "";
}

//--- Creators classes ---

//CybertruckCreator class
class CybertruckCreator extends Factory {
  public factoryMethod(): Car {
    return new CybertruckConcrete();
  }
}

//ModelSCreator class
class ModelSCreator extends Factory {
  public factoryMethod(): Car {
    return new ModelSConcrete();
  }
}

//ModelXCreator class
class ModelXCreator extends Factory {
  public factoryMethod(): Car {
    return new ModelXConcrete();
  }
}

//--- Interface ---

//Car class
interface Car {
  getDetails(): string;
}

//--- Concrete Products ---

//Concrete product Cybertruck
class CybertruckConcrete implements Car {
  getDetails() {
    // Implement getDetails logic for Cybertruck
    return "Cybertruck details";
  }
}

//Concrete product MedelS
class ModelSConcrete implements Car {
  getDetails() {
    // Implement getDetails logic for Cybertruck
    return "ModelS details";
  }
}

//Concrete product ModelX
class ModelXConcrete implements Car {
  getDetails() {
    // Implement getDetails logic for Cybertruck
    return "ModelX details";
  }
}

//--- Decorator---

//Notifier class
class Notifier {
  Notification: string = "";
}
