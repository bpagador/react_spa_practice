import React, { Component } from 'react';
import './App.css';
import Contacts from "./Contacts";
import "react-router-dom"



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
  
    <button onClick={() => this.props.history.push('/new_page')}>New Page</button>
    
    <Contacts contacts={this.state.contacts} />

    </>

    
    
  );
}
  
}

export default App;
