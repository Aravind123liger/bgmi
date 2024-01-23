import React, { Component } from "react";
import "./NavbarStyles.scss";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/" className="navbar-logo">
          MEDICARE
        </Link>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            {/* Example: Linking Sign-Up button to "/signup" */}
            <Link to="/Signup">
              <button className="Appointment-btn">Sign-up</button>
            </Link>
          </li> 
        </ul>
      </nav>
    );
  }
}

export default Navbar;
