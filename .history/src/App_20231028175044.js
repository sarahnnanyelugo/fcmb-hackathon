import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./assets/images/top.png";
import Menu from "./assets/images/menu.png";
import Bell from "./assets/images/bell.png";
import "./App.scss";

function App() {
  return (
    <>
      <div className="app-header">
        <center>
          <div className="col-md-3">
            <center>
              <div className="col-md-10 app">
                <div className="app-inner">
                  <div className="app-inner2">
                    <div className="app-face">
                      <img src={Top} alt="icon" width="100%" />
                      <div className="flexy">
                        <div className="col-md-1">
                          {" "}
                          <img
                            src={Menu}
                            alt="icon"
                            width="100%"
                            className="flexy1"
                          />
                        </div>
                        <div className="col-md-1">
                          {" "}
                          <img src={Bell} alt="icon" width="100%" />
                        </div>
                      </div>
                    </div>
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
