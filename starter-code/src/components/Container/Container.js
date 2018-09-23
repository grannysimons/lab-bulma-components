import React, { Component } from 'react'
const classNames = require('classnames');

export default class Container extends Component {
  render() {
    return (
      <div className={classNames(this.props, "container")}>
        <div className="notification">
          {this.props.children}
        </div>
      </div>
    )
  }
}
