import React from "react";
import "./Style/right.css";
import { FaUser } from "react-icons/fa";
import { TiDocumentText, TiContacts } from "react-icons/ti";

class CardRight extends React.Component {
  render() {
    return (
      <>
        <div className="container_right">
          <ul>
            <li className="About">
              <FaUser className="icon" />
              <h1>About</h1>
            </li>
            <li className="Document">
              <TiDocumentText className="icon" />
              <h1>Document</h1>
            </li>
            <li className="Contact">
              <TiContacts className="icon" />
              <h1>Contact</h1>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default CardRight;
