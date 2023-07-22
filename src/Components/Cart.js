import { ReactComponent as Logo } from "../shopping-cart-outline-svgrepo-com.svg";
import React from "react";
import OrderContext from "./order-state context";
import { useContext } from "react";

const Cart = () => {
  const { order } = useContext(OrderContext);

  return (
    <div style={{ marginTop: "1rem" }}>
      <Logo
        id="cartLogo"
        style={{ height: "3rem", width: "3rem", marginRight: "2rem" }}
      ></Logo>
      <div id="cartBurgerCount">5</div>
    </div>
  );
};

export default Cart;
