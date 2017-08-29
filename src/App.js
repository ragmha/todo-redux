import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Message from './components/Message';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <Router>
          <div className="Todo-App">
            <Message message="Hello There" />
            <TodoForm />
            <TodoList />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
