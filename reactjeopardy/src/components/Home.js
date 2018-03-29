import React, { Component } from 'react';
import logo from '../benches.jpg';
import { Route, Link, Switch } from 'react-router-dom';
import Footer from './Footer'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h2> Your Friendly Destination For All Things Sports Trivia</h2>
                <p> To get started please enter your Username: </p>
                <br></br>
                <div className="contain" >
                    <form name="add" className="form-container" onSubmit={(e) => { this.props.handleSubmit(e) }}>
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-success" type="submit"> Submit</button>
                            </span>
                            <input className="form-control"
                                placeholder="username/classname"
                                value={this.props.inputValue}
                                onChange={(e) => { this.props.handleInput(e) }} />
                        </div>
                    </form>
                </div>
                <br></br>
                <h2> Select Your Trivia Game: </h2>
                <br></br>

                <Link to="/Jeopardy">
                    <button type="button" className="btn btn-success" data-placement="bottom" title="SportsJeopardy">Sports Jeopardy </button>
                </Link>
                <br></br>
                <br></br>
                <br></br>
                <h3> Coming Soon: </h3>

                <Link to="/NameGame">
                    <button type="button" className="btn btn-danger" data-placement="bottom" title="NameGame">Baseball Name Game </button>
                </Link>
                <sp></sp>
                <Link to="/WhoAmI">
                    <button type="button" className="btn btn-danger" data-placement="bottom" title="WhoAmI">Who Am I</button>
                </Link>
                <br></br>
                <Link to="/CompareStats">
                    <button type="button" className="btn btn-danger" data-placement="bottom" title="CompareStats">Compare Stats</button>
                </Link>
                <br></br>
                <br></br>
                <Footer />
            </div>
        );
    }
}

export default Home;