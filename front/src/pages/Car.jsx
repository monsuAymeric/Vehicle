import React, { useState } from "react";
import "./Car.css";
import { useParams } from "react-router-dom";
import datas from "../datas/Products.json";
import colors from "../datas/Colors.json";
import cities from "../datas/City.json";
import Card from "../components/Card";

export default function Car() {
  const { name } = useParams();
  const product = datas.find((p) => p.name === name);

  return (
    <main>
      <div>
        {product ? (
          <section className="car__section">
            <h1>{product.title}</h1>
            <p>{product.text}</p>
            <Card image={product.image} name={product.name} />
            <div className="car__infos">
              <div className="list__div">
                <h2>Colors:</h2>
                <div className="list__container">
                  {colors.map((item) => {
                    return (
                      <button key={item.id} title={`Color: ${item.name}`}>
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="list__div">
                <h2>City:</h2>
                <div className="list__container">
                  {cities.map((item) => {
                    return (
                      <button key={item.id} title={`City: ${item.name}`}>
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="command__div">
              <button className="btn">Commander</button>
            </div>
          </section>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </main>
  );
}
