import React, { Component } from "react";

export default class Navbar extends Component {
  showLeft() {
    var elemsLeft = [];
    this.props.children.forEach(child => {
      if (child.props.className === "left") {
        elemsLeft.push(child.props.children);
      }
    });
    return elemsLeft;
  }
  showRight() {
    var elemsRight = [];
    this.props.children.forEach(child => {
      if (child.props.className === "right") {
        elemsRight.push(child.props.children);
      }
    });
    return elemsRight;
  }
  render() {
    return (
      <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu" 
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <a className="navbar-item">{this.showLeft()}</a>
          </div>

          <div className="navbar-end">
            <a className="navbar-item">{this.showRight()}</a>
          </div>
        </div>
      </div>
    );
  }
}
