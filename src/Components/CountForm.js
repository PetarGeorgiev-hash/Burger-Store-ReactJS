import "../Components Css/CountForm.css";
import { useState } from "react";

function CountForm(props) {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      return prevCount !== 0 ? prevCount - 1 : console.log("UPS");
    });
  };

  return (
    <form
      id="formCount"
      onChange={(event) => {
        event.preventDefault();
      }}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <button onClick={handleDecrement}>-</button>
      <input type="nubmer" value={count}></input>
      <button onClick={handleIncrement}>+</button>
    </form>
  );
}
export default CountForm;
