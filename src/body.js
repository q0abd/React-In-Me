import React from "react";
import "./body.css";
import Start from "./imgbody/Group.png";
import Drive from "./imgbody/Vector.png";
import Maintinance from "./imgbody/Vector1.png";
import Battery from "./imgbody/Group1.png";
import Tires from "./imgbody/Group2.png";
import Lock from "./imgbody/Group3.png";
import Car from "./Car.png";
import Logo1 from "./imgbody/caticon.png";
import Logo2 from "./imgbody/Vector.png";
import Logo3 from "./imgbody/moonicon.png";

// import PropTypes from "prop-types";
let aac = `>`;
let bbc = `<`;

class Body extends React.Component {
  render() {
    return (
      <div>
        <div className="cards">
          <div className="card">
            <img className="rasm12" src={Start} alt="rasm" />
            <div className="card1">Start</div>
          </div>
          <div className="card">
            <img className="rasm12" src={Drive} alt="rasm" />
            <div className="card1">Drive</div>
          </div>
          <div className="card">
            <img className="rasm12" src={Maintinance} alt="rasm" />
            <div className="card1">Settings</div>
          </div>
          <div className="card">
            <img className="rasm12" src={Battery} alt="rasm" />
            <div className="card1">Battery</div>
          </div>
          <div className="card">
            <img className="rasm12" src={Tires} alt="rasm" />
            <div className="card1">Tires</div>
          </div>
          <div className="card">
            <img className="rasm12" src={Lock} alt="rasm" />
            <div className="card1">Lock</div>
          </div>
        </div>
        <div className="older">
          <div className="box-car">
            <h1 className="car">
              Infinity Renault<h1 className="car2">TM</h1>
            </h1>
            <div className="cardPuls">
              <div className="pulsCard">{bbc}</div>
              <div className="pulsCard">{aac}</div>
            </div>
          </div>
          <div className="box-menu">
            <div className="league">
              <div className="bir">
                <div className="round1">
                  <img className="cat" src={Logo1} alt="rasm" />
                </div>
                <div className="sana">
                  <h1 className="safec">72</h1>
                  <h1 className="safec1">Championship</h1>
                </div>
              </div>
            </div>
            <div className="league">
              <div className="bir">
                <div className="round">
                  <img className="moon" src={Logo3} alt="rasm" />
                </div>
                <div className="sana">
                  <h1 className="safec">32</h1>
                  <h1 className="safec1">Skins</h1>
                </div>
              </div>
            </div>
            <div className="league">
              <div className="bir">
                <div className="round">
                  <img className="kubok" src={Logo2} alt="rasm" />
                </div>
                <div className="sana">
                  <h1 className="safec">64</h1>
                  <h1 className="safec1">Thropies Won</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carReno">
          <img className="reno" scr={Car} alt="car"></img>
        </div>
      </div>
    );
  }
}

export default Body;
