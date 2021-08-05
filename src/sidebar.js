import React from "react";
import "./sidebar.css";
import Rasm from "./img/Group618.png";
import Rasm2 from "./img/Union.png";
import Rasm3 from "./img/category.png";
import Rasm4 from "./img/Union12.png";
import Rasm5 from "./img/group.png";
import Rasm6 from "./img/calculator.png";
import Rasm7 from "./img/settings.png";
import Rasmm from "./img/Ellipse6.png"
import Rasmm1 from "./img/Ellipse7.png"
import Rasmm2 from "./img/Ellipse8.png"
import Profile from "./img/profile.png"

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="borderbox">
        <img className="rasm-first" src={Rasm} alt="rasm" />
        <div className="menu-word">Menu</div>
        <div className="for-img">
          <img className="rasm" src={Rasm2} alt="rasm" />
          <h1>Home</h1>
        </div>
        <div className="for-img">
          <img className="rasm" src={Rasm3} alt="rasm" />
          <h1>Garage</h1>
        </div>
        <div className="for-img">
          <img className="rasm" src={Rasm4} alt="rasm" />
          <h1>Service Menu</h1>
        </div>
        <div className="for-img">
          <img className="rasm" src={Rasm5} alt="rasm" />
          <h1>Racers</h1>
        </div>
        <div className="for-img">
          <img className="rasm" src={Rasm6} alt="rasm" />
          <h1>Calculator</h1>
        </div>
        <div className="for-img">
          <img className="rasm" src={Rasm7} alt="rasm" />
          <h1>Settings</h1>
        </div>
        <div className="races">Scheduled Racers</div>
        <div className="circle wery">
          <img className="rasm1" src={Rasmm} alt="rasm" />
          <div className="kolso">MotoGP 2021</div>
        </div>
        <div className="circle wert">
          <img className="rasm1" src={Rasmm1} alt="rasm" />
          <div className="kolso">Dynamics 22</div>
        </div>
        <div className="circle werf">
          <img className="rasm1" src={Rasmm2} alt="rasm" />
          <div className="kolso">Olympics</div>
        </div>
        <div className="devona">
            <img className="devonasi" scr={Profile} alt="Mujik"/>
        </div>
      </div>
    );
  }
}

export default Sidebar;
