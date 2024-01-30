import express from "express";
import { Pool } from "pg";
import "./classes";

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',     // Your database user
  host: 'localhost',         // Your database host (localhost if the database is on the same machine)
  database: 'postgres', // Your database name
  password: 'passworddb', // Your database password
  port: 5432,                // Your database port (5432 is the default for PostgreSQL)
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

// Fetch Data test
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

const myQuery = 'SELECT * FROM colors'; // Replace with your actual SQL query.

fetchData(myQuery)
.then(data => console.log(data))  // Handle successful response.
.catch(err => console.error(err)); // Handle errors.

// Fetch Cars test

class CarService {
  private client: Pool;  // or Client, depending on your setup

  constructor(client: Pool) {  // or Client
      this.client = client;
  }

  public async getDetails(carId: number): Promise<Car> {
      const sqlQuery = 'SELECT "idcar", "idcolor", "idmodel", "idadress", "idengine", idprice FROM cars WHERE "idcar" = $1';
      try {
          const res = await this.client.query(sqlQuery, [carId]);
          if (res.rows.length === 0) {
              throw new Error(`Car with Id ${carId} not found.`);
          }
          const carDetails = res.rows[0];
          return {
            Id: carDetails.idcar,
            Color: carDetails.idcolor,
            Name: carDetails.idmodel,
            Adress: carDetails.idadress,
            Engine: carDetails.idengine,
            Price: carDetails.idprice,
            getDetails: function (carId: any) {
              throw new Error("Function not implemented.");
            }
          };
      } catch (err) {
          console.error('Error executing query', err.stack);
          throw err;
      }
  }
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

const carService = new CarService(pool);  // 'client' should be your actual database connection
const carId = 1;  // Replace with the actual Id of the car you want to fetch

carService.getDetails(carId)
    .then(car => console.log(car))  // Handle successful response.
    .catch(err => console.error(err));  // Handle errors.

app.get("/", (req, res) => {
  res.send(carService.getDetails(carId));
})