import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header flex justify-between shadow-lg bg-white">
      <div className="logo-container">
        <img className="logo w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4">
          <li>
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            
            </li>
          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
