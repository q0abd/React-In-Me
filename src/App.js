import "./App.css";
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Academy {this.props.title}</h1>
        <button onClick="">Click me</button>
      </div>
    );
  }
}

export default App;
