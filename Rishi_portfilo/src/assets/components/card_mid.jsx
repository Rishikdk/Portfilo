import React from "react";
import "./Style/mid.css";
import Profile from "./images/love.jpeg";

class CardMid extends React.Component {
  render() {
    return (
      <>
        <div className="container_mid">
          <div className="title">
            <h1>About</h1>
          </div>
          <div className="contain">
            <p>
              Miss Diamond I love you i love you i love you i love you I love
              you i love you i love you i love you I love you i love you i love
              you i love you I love you i love you i love you i love you I love
              you i love you i love you i love you I love you i love you i love
              you i love you I love you i love you i love you i love you I love
              you i love you i love you i love you Diamond
            </p>
            <img img src={Profile}></img>
          </div>
        </div>
      </>
    );
  }
}

export default CardMid;
