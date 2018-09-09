import React, { Component } from 'react';
import ToDoList from './components/TodoList';
import SignIn from './components/SignIn';
import Auth from './components/auth/Auth';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './state/actions';

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={SignIn} />
          <Route path="/app" component={Auth(ToDoList)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
