import React, {Component} from 'react';
import './Formfield.css';

export default class Formfield extends Component{
  render(){
    return(
    <div className="field">
      <label className="label">{this.props.label}</label>
      <div className="control">
        <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    </div>
    );
  }
}