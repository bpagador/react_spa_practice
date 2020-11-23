import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contacts: []
  }

render() {
  return (
    <div className="card">
    <div class="card-body">
      <h5 class="card-title">Steve Jobs</h5>
      <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
      <p class="card-text">Stay Hungry, Stay Foolish</p>
    </div>
  </div>
  );
}
  
}

export default App;
