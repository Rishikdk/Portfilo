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
                <p>+91 9876543210</p>
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

            <button>Downlode CV</button>
          </div>
        </div>
      </>
    );
  }
}

export default Cardleft;
