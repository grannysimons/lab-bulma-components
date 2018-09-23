import React, { Component } from 'react';
import './App.css';
import 'bulma-start/css/main.css';
import Coolbutton from './components/Coolbutton/Coolbutton';
import Navbar from './components/Navbar/Navbar';
import FormField from './components/Formfield/Formfield';
import Message from './components/Message/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <div className="left">
            <Coolbutton>Home</Coolbutton>
          </div>
          <div className="right">
            <Coolbutton is-primary>Login</Coolbutton>
            <Coolbutton is-warning>Sign up</Coolbutton>
          </div>
        </Navbar>
        <h1 className="App-title">Sign up</h1>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="1234" />
        <Coolbutton is-light is-outlined is-inverted>Submit the form</Coolbutton>
        <Message is-link is-small title="Bu!">Hola</Message>

      </div>
    );
  }
}

export default App;
