import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Description from "./Components/Description";
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <img
        id="burgerImg"
        alt="burgers"
        src="https://insanelygoodrecipes.com/wp-content/uploads/2022/05/Homemade-Beef-Salmon-and-Kebab-Stuffed-Burgers-with-Veggies.jpg"
      ></img>
      <Description></Description>
    </React.Fragment>
  );
}

export default App;
