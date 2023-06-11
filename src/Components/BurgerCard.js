import "../Components Css/BurgerCard.css";
import AddToCart from "./AddToCart";
import CountForm from "./CountForm";

const BurgerCard = (props) => {
  return (
    <div id="burgerCardWrapper">
      <div id="name">{props.name}</div>
      <div id="ingredient">{props.ingredient}</div>
      <img src={props.image}></img>
      <CountForm></CountForm>
      <AddToCart></AddToCart>
    </div>
  );
};

export default BurgerCard;
