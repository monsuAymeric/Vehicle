import React, { useState, useEffect } from "react";
import "./Home.css";
import cars from "../datas/Products.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
  // //--- Fetch car datas ----
  // const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/car");
  //       const data = await response.json();
  //       setCars(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <main>
      <section>
        <div>
          <h1>All the cars:</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            quaerat vitae?
          </p>
        </div>
        <div className="cars">
          {/*Map all cars */}
          {cars.map((car) => {
            return (
              <article className="car__card" key={car.id}>
                <Link to={`/car/${car.name}`}>
                  <Card image={car.image} alt={car.name} />
                </Link>
                <div className="car__infos">
                  <h2>{car.title}</h2>
                  <p>{car.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
