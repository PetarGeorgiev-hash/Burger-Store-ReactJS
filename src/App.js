import React, { useEffect, useState } from "react";
import "./App.css";
import BurgerCard from "./Components/BurgerCard";
import Header from "./Components/Header";
import Description from "./Components/Description";
import data from "./data.json";
import OrderContext from "./Components/order-state context";
function App() {
  const [burgerData, setBurgerData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://127.0.0.1:5500/src/data.json")
        .then((response) => response.json())
        .then((data) => {
          setBurgerData(data);
        })
        .catch((e) => {
          console.error("Unable to fetch the data but will show it anyway", e);
          setBurgerData(data);
        });
    }, 2000);
  }, []);
  return (
    <React.Fragment>
      <OrderContext.Provider value={{ order: [] }}>
        <Header></Header>
        <img
          id="burgerImg"
          alt="burgers"
          src="https://insanelygoodrecipes.com/wp-content/uploads/2022/05/Homemade-Beef-Salmon-and-Kebab-Stuffed-Burgers-with-Veggies.jpg"
        ></img>
        {burgerData != null ? (
          burgerData.map((burger) => {
            return (
              <BurgerCard
                key={burger.id}
                name={burger.name}
                ingredient={burger.ingredient}
                price={burger.price}
                image={burger.image}
              ></BurgerCard>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
        <Description></Description>
      </OrderContext.Provider>
    </React.Fragment>
  );
}

export default App;
