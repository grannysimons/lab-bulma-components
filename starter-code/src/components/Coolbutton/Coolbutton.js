import React, { Component } from 'react';
const classNames = require('classnames');

const divStyle = {
  margin: '10px 10px',
};

export default class Button extends Component {
  render() {
    return (
      <button className={classNames(this.props, 'button')} style={divStyle}>{this.props.children}</button>
    );
  }
}
