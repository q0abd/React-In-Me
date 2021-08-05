import "./App.css";
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar'
import Body from './body'

class App extends React.Component {
  
  render() {
    return (
      <div>
           <div className="boxer">
    <div className="content1">
      <Sidebar/>
    </div>
    <div className="container">
      <Navbar/>
      <Body/>
    </div>
    </div>
      </div>
    );
  }
}

export default App;