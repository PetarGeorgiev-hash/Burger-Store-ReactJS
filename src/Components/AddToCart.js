import { useContext } from "react";
import "../Components Css/AddToCart.css";
import OrderContext from "./order-state context";

const AddToCart = (props) => {
  const { order } = useContext(OrderContext);

  const orderButtonHandler = () => {
    order.push(props);
    console.log(order);
  };

  return (
    <button id="cart" onClick={orderButtonHandler}>
      Add To Cart
    </button>
  );
};
export default AddToCart;
