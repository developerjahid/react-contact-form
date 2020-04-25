import React from 'react';
import Navbar from './components/Navbar'
import SimpleForm from './components/forms/SimpleForm'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar logo="React Contact Form with Php by @developerjahid." />
        <SimpleForm />
      </div>
    );
  }
}

export default App;
