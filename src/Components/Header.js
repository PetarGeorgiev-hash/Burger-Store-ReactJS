import "../Components Css/Header.css";
import Cart from "./Cart";

function Header() {
  return (
    <div id="headerWrapper">
      <div id="name">Nice Meals</div>
      <Cart></Cart>
    </div>
  );
}

export default Header;
