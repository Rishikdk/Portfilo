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
              hi there are many people who have created this card mid and have
              created their own cards and have created their own cards with
              different
            </p>
            {/* <img img src={Profile}></img> */}
          </div>
        </div>
      </>
    );
  }
}

export default CardMid;
