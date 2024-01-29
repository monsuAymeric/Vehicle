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

  // State to track selected color and city
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city === selectedCity ? null : city);
  };

  const handleCommandClick = () => {
    if (selectedColor && selectedCity) {
      alert(
        "Command clicked with color:",
        selectedColor,
        "and city:",
        selectedCity
      );
    } else {
      alert("Please select both color and city before clicking Commander");
    }
  };

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
                  {colors.map((item) => (
                    <button
                      key={item.id}
                      title={`Color: ${item.name}`}
                      className={
                        selectedColor === item.name ? "btn__selected" : "btn"
                      }
                      onClick={() => handleColorClick(item.name)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="list__div">
                <h2>City:</h2>
                <div className="list__container">
                  {cities.map((item) => {
                    return (
                      <button
                        key={item.id}
                        title={`City: ${item.name}`}
                        className={
                          selectedCity === item.name ? "btn__selected" : "btn"
                        }
                        onClick={() => handleCityClick(item.name)}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="command__div">
              <button className="btn" onClick={handleCommandClick}>
                Commander
              </button>
            </div>
          </section>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </main>
  );
}
