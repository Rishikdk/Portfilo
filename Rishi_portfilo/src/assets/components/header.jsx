import React from "react";
import "./Style/header.css";
import Profile from "./images/OIP.jpeg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="components_header">
          <div className="component_cover">
            <h1>+ Add cover picture</h1>
          </div>
          <div className="component_user">
            <div className="profile">
              <img src={Profile}></img>
            </div>
            <div className="details">
              <h1> Rishi Khadka</h1>
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <FaFacebook className="facebook" />
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/rishi_kdk/">
                    <FaInstagram className="instagram" />
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/rishi-khadka-5576a82a4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <FaLinkedin className="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Rishikdk">
                    <FaGithub className="github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
