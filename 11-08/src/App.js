import logo from './logo.svg';
import './App.css';
import React from 'react';
import Welcome from './welcome';

class App extends React.Component() {
  render(){
  return (
    <div>    
      <Welcome name ="Peter"/>
      <Welcome name ="Class"/> 
    </div>

  );
}
}

export default App;
