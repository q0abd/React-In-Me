import React from "react";
import "./navbar.css";
import Qidiruv from "./navbar-img/Union.png";
import Past from "./bottom.png";
import Qongiroq from "./navbar-img/notification.png";
import Account from "./navbar-img/person.png";
import Odam from "./navbar-img/Ellipse3.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="obshiy-input">
          <div className="input">
            <img className="search" src={Qidiruv} alt="rasm" />
            <h1 className="seach-word">Search for a race, car or racer</h1>
          </div>
          <div className="input2">
            <h1 className="car-word">Choose a car</h1>
            <img className="past" src={Past} alt="rasm" />
          </div>
        </div>
        <div className="iconsintheright">
          <img className="qongiroq a" src={Qongiroq} alt="rasm" />
          <img className="account a" src={Account} alt="rasm" />
          <img className="odam" src={Odam} alt="rasm" />
        </div>
      </div>
    );
  }
}

export default Navbar;
