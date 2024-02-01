import React, { useState, useEffect } from "react";
import "./Car.css";
import { useParams } from "react-router-dom";
// import cars from "../datas/Products.json";
// import colors from "../datas/Colors.json";
// import cities from "../datas/City.json";
import Card from "../components/Card";

export default function Car() {
  //--- Fetch car datas ----
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/models");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //--- Fetch colors datas ----
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/colors");
        const data = await response.json();
        setColors(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //--- Fetch cities datas ----
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/adress");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //--- Deal with the product (car) call ---

  //Id's name
  const { name } = useParams();
  const product = cars.find((p) => p.name === name);

  //--- Handle clicks ----

  // State to track selected color and city
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city === selectedCity ? null : city);
  };

  // State to track user authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulating authentication logic (replace with actual authentication check)
    const checkAuthentication = () => {
      // Replace the following line with your actual authentication check
      const userIsAuthenticated = true; /* Your authentication check */
      setIsAuthenticated(userIsAuthenticated);
    };

    checkAuthentication();
  }, []);

  const handleCommandClick = () => {
    if (isAuthenticated) {
      if (selectedColor && selectedCity) {
        console.log(
          "Command clicked with color:",
          selectedColor,
          "and city:",
          selectedCity
        );
        alert("Command passed.");
      } else {
        console.log(
          "Please select both color and city before clicking the command button."
        );
        alert(
          "Please select both color and city before clicking the command button."
        );
      }
    } else {
      // User not authenticated, show an alert
      alert("You are not connected, please sign in to command.");
    }
  };

  return (
    <main>
      <div>
        {product ? (
          <section className="car__section">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>{product.price} €</h2>
            <Card image={product.picture} name={product.name} />
            <div className="car__infos">
              <div className="list__div">
                <h2>Colors:</h2>
                <div className="list__container">
                  {/* Map colors */}
                  {colors.map((item) => (
                    <button
                      key={item.idcolor}
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
                  {/* Map city */}
                  {cities.map((item) => {
                    return (
                      <button
                        key={item.idadress}
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
              {/* Command button */}
              <button className="btn" onClick={handleCommandClick}>
                Command
              </button>
            </div>
          </section>
        ) : (
          //Product not found
          <p>Product not found</p>
        )}
      </div>
    </main>
  );
}
