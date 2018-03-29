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
    let customer = localStorage.getItem('username')
    this.setState({
      customer: customer
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
        <div>
          <Switch>
            <Route path="/" exact render={(props) =>
              <Home {...props} handleSubmit={this.handleSubmit} handleInput={this.handleInput} inputValue={this.state.inputValue} />} />
            <Route path="/Jeopardy" render={(props) =>
              <Jeopardy {...props} customer={this.state.customer}/>} />
            <Route path="/NameGame" render={(props) =>
              <Namegame {...props} customer={this.state.customer}/>} />
            <Route path="/WhoAmI" render={(props) =>
              <Whoami {...props} customer={this.state.customer}/>} />
            <Route path="/Comparestats" render={(props) =>
              <Comparestats {...props} customer={this.state.customer} />} />
            <Route path="/Contact" render={(props) =>
              <Contact {...props} customer={this.state.customer} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

