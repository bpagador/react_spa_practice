import React, { Component } from 'react';
import './App.css';
import Contacts from "./Contacts";



class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data})
    })
    .catch(console.log)
  }


  
  

render() {
  return (
    <>
  
    <button>New Page</button>
    <Contacts contacts={this.state.contacts} />

    </>

    
    
  );
}
  
}

export default App;
