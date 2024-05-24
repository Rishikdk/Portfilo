import React from "react";
import { FaMobile, FaCalendar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import "../components/Style/card.css";

class Cardleft extends React.Component {
  render() {
    return (
      <>
        <div className="container_info">
          <h1>Info</h1>
          <div className="contact">
            <ul>
              <li>
                <FaMobile />
                <label>Phone</label>
                <p>+977 9865993612</p>
              </li>

              <li>
                <MdEmail />
                <label>Email</label>
                <p>rishikhadka@gmail.com</p>
              </li>

              <li>
                <ImLocation />
                <label>location</label>
                <p>Nepal,Kathmandu</p>
              </li>

              <li>
                <FaCalendar />
                <label>DoB</label>
                <p>Feb 14 2002</p>
              </li>
            </ul>

            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">CV</span>
              <span class="circle">Download</span>
              <svg
                viewBox="0 0 24 24"
                class="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Cardleft;
