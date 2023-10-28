import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./assets/images/top.png";
import Menu from "./assets/images/menu.png";
import Bell from "./assets/images/bell.png";
import Eye from "./assets/images/eye.png";
import Eye2 from "./assets/images/eye2.png";
import Add from "./assets/images/add.png";
import Transfer from "./assets/images/trans.png";
import Card from "./assets/images/atm.png";
import Mobile from "./assets/images/topup.png";
import Lending from "./assets/images/lend.png";
import Data from "./assets/images/data.png";
import Arrow from "./assets/images/arrow.png";
import Home from "./assets/images/home.png";
import Piggy from "./assets/images/piggy.png";
import Settings from "./assets/images/setting.png";
import "./App.scss";
import { useState } from "react";

function App() {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState("");

  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  };
  return (
    <>
      <div className="app-header">
        <center>
          <div className="col-md-3">
            <center>
              <div className="col-md-10 app">
                <div className="app-inner">
                  <div className="app-inner2">
                    <div className="app-face"></div>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </center>
      </div>
    </>
  );
}

export default App;
