import React from "react";
import { FaTree } from "react-icons/fa";

function Nav() {
  const style = { color: "green", fontSize: "1.5rem" };
  return (
    <div className="header">
      <nav className="nav">
        <div className="logo">
          <FaTree style={style} />
          <h4>Landscapping</h4>
        </div>
        <ul className="nav--ul">
          <li className="nav--li">
            <a href="">Home</a>
          </li>
          <li className="nav--li">
            <a href="">about</a>
          </li>
          <li className="nav--li">
            <a href="">service</a>
          </li>
          <li className="nav--li">
            <a href="">contact us</a>
          </li>
        </ul>
        <button className="btn btn--nav">get a quote</button>
      </nav>
      <header className="hero--section">
        <div className="hero--notes">
          <h2>
            we deliver the best service in the continent at an affordable price
          </h2>
          <p>
            Our expert craftman can tranform your outdoor space into a 'wow'
            <br /> We have the experience and know-how to design and build the
            perfect outdoor Landscape
          </p>
          <button className="btn hero--btn">Work With Us</button>
        </div>

        <img
          src="https://i.pinimg.com/originals/a6/9a/19/a69a19c2c8909b2231f6d7c3fa955257.png"
          alt="trees"
          className="hero--img"
        />
      </header>
    </div>
  );
}
export default Nav;
