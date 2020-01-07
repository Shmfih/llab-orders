import React, { PureComponent } from "react";
import "./NavBar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class NavBar extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div className="navbar">
        <div className="navbar-item">
          <div className="logo align-middle">
            <Link to="/">
              <img src="images/llab.png" />
            </Link>
          </div>
          <div className="logo-description align-middle">
            TRÁNG FILM &amp; SCAN
            <div>(Film development &amp; Scan)</div>
          </div>
        </div>
        <div className="navbar-item">
          <div className="title">
            <div className="title-content">{title ? title : "LLAB"}</div>
          </div>
        </div>
        <div className="navbar-item align-middle">
        <div className="hamburger-menu">
          <div className="menu align-middle hamburger-icon">
            <img src="images/list.png" className="hamburger-icon" />
            <ul className="menu-ul">
              <li className="hamburger-menu-item">Photo printing</li><hr />
              <li className="hamburger-menu-item"><Link to='/login'>Profile</Link></li>
              <li className="hamburger-menu-item"><Link to='/login'>Login</Link></li>
              <li className="hamburger-menu-item">Logout</li>
            </ul>
          </div>
          

          </div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {};

export default NavBar;
