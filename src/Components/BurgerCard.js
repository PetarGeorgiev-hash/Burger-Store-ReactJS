import "../Components Css/BurgerCard.css";
import CountForm from "./CountForm";

const BurgerCard = (props) => {
  return (
    <div id="burgerCardWrapper">
      <div id="name">{props.name}</div>
      <div id="ingredient">{props.ingredient}</div>
      <img src={props.image} alt="burger type"></img>
      <CountForm foodInfo={props}></CountForm>
    </div>
  );
};

export default BurgerCard;
