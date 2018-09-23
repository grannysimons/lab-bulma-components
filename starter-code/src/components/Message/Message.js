import React, { Component } from 'react';
const classNames = require('classnames');

export default class Message extends Component {
  getClasses(){
    var properties = Object.assign({},this.props);
    if(properties.children) delete properties.children;
    console.log('properties ', properties);
    properties.message = "message";
    return properties;
  }
  render() {
    return (
      <article className={classNames(this.getClasses())}>
        <div className="message-header">
          <p>{this.props.title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    )
  }
}
