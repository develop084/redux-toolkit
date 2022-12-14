import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

function Navbar() {
  const items = useSelector(state => state.cart)
  return (
    <div style={{display:'flex',alignItems:'center', justifyContent: 'space-evenly', marginTop : 20}}>
      <div>REDUX STORE</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div>Cart Items : {items.length}</div>
    </div>
  );
}

export default Navbar;
