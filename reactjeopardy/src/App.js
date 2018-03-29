import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Jeopardy from './components/Jeopardy';
import Whoami from './components/Whoami';
import Namegame from './components/Namegame';
import Comparestats from './components/Comparestats';
import Contact from './components/Contact';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: <Home />,
      inputValue: '',
      username: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    let user = localStorage.getItem('username')
    this.setState({
      user: user
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    var username = this.state.inputValue;
    this.setState({
      username: username,
    }, () => localStorage.setItem("username", username));
  };

  handleInput(event) {
    this.setState({
      inputValue: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <nav className="navbar navbar-expand-sm navbar-dark">

            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/">
                  <button type="button" className="btn btn-success" data-placement="bottom" title="My Home">Home </button>
                </Link>
              </li>
              <h2 className="navbar-brand brand-name">
                <img className="img1-responsive"
                  src="./images/benches.jpg" />
              </h2>
              <li className="nav-item">
                <Link to="/Contact">
                  <button type="button" className="btn" data-placement="bottom" title="My Home">Contact </button>
                </Link>
              </li>
            </ul>

          </nav>
        </div>
        <div>
          <Switch>
            <Route path="/" exact render={(props) =>
              <Home {...props} handleSubmit={this.handleSubmit} handleInput={this.handleInput} inputValue={this.state.inputValue} />} />
            <Route path="/Jeopardy" render={(props) =>
              <Jeopardy {...props} user={this.state.user} />} />
            <Route path="/NameGame" render={(props) =>
              <Namegame {...props} user={this.state.user} />} />
            <Route path="/WhoAmI" render={(props) =>
              <Whoami {...props} user={this.state.user} />} />
            <Route path="/Comparestats" render={(props) =>
              <Comparestats {...props} user={this.state.user} />} />
            <Route path="/Contact" render={(props) =>
              <Contact {...props} user={this.state.user} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

