import React from "react";
import Header from "./assets/components/header.jsx";
import Leftcard from "./assets/components/card_left.jsx";
import Mid from "./assets/components/card_mid.jsx";
import Rightcard from "./assets/components/card_right.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="container_body">
          <div className="container_header">
            <Header />
          </div>

          <div className="container_card">
            <div className="left_card">
              <Leftcard />
            </div>
            <div className="mid_card">
              <Mid />
            </div>

            <div className="right_card">
              <Rightcard />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
