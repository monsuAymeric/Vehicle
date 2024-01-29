import React from "react";
import "./Home.css";
import datas from "../datas/Products.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
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
          {datas.map((product) => {
            return (
              <article className="car__card" key={product.id}>
                <Link to={`/car/${product.name}`}>
                  <Card image={product.image} alt={product.name} />
                </Link>
                <div className="car__infos">
                  <h2>{product.title}</h2>
                  <p>{product.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
