import "../Components Css/BurgerCard.css";

const BurgerCard = (props) => {
  console.log(props);
  return (
    <div id="burgerCardWrapper">
      <div id="name">{props.name}</div>
      <div id="ingredient">{props.ingredient}</div>
      <img src={props.image}></img>
    </div>
  );
};

export default BurgerCard;
