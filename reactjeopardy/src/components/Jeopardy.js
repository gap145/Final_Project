import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Board from './Board';
import ScoreBoard from './Scoreboard';
// import Timer from './Timer';
// import axios from 'axios';




class Jeopardy extends Component {
    constructor() {
        super()
        this.state = {
            showing: true,
        };
    }

    render() {
        const { showing } = this.state;
        return (
            <div className="Rules">
                <h3> Welcome, {this.props.customer}! to Sports Jeopardy</h3>
                <div id="myDIV">
                    <button className="btn btn-primary" onClick={() => this.setState({ showing: !showing })}>Rules (Collapse/Open)</button>
                    <br></br>
                    <br></br>
                    {showing
                        ? <div><h3> The Rules are as follows: </h3>

                            <p><ul>
                                <li>Play individually or in groups.</li>
                                <li>Pick your questions from the list of categories and point values.</li>
                                <li>To reveal Question, Click on the image or point value of a category.</li>
                                <li>Participants Answer in an auditory form. When image is Clicked again, the answer will be revealed.</li>
                                <li>If the Participant or team is correct, they are awarded the point value of the question.</li>
                                <li>Click the "plus" button located on the bottom of the main board to add the point value to the appropriate team score.</li>
                                <li>If the Participant or team is not correct -> Repeat score updating using the "minus" feature for the appropriate team.</li>
                                <li>Continue play until all questions have been answered. The team with the most points wins.</li>
                            </ul> </p></div>
                        : null
                    }
                </div>
                {/* <Timer /> */}
                <Board />
                <ScoreBoard />
            </div>
        );
    }
}

export default Jeopardy;



