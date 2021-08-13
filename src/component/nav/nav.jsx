import "./nav.css";
import { FaBars } from "react-icons/fa";

import React, { Component } from "react";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.state = {
      showContent: true,
    };
  }
  toggleButton(e) {
    e.preventDefault();
    this.setState({ showContent: !this.state.showContent });
  }
  render() {
    const { showContent } = this.state;
    return (
      <div>
        <nav>
          <ul>
            <li className="logo">Welcome</li>
            {showContent === true && (
              <>
                <li className="nav">
                <a href="#about">About</a>
                </li>
                <li className="nav">
                  <a href="#about">Service</a>
                </li>
                <li className="nav">
                  <a href="#project">Project</a>{" "}
                </li>
                <li className="nav">
                  <a href="#contact">Contact</a>
                </li>
              </>
            )}
            <li onClick={this.toggleButton} className="btn">
              <i>
                <FaBars />
              </i>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
