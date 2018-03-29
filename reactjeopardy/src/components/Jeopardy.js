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
            score: "",
        };
    }

    render() {
        const { showing } = this.state;
        return (
            <div className="Rules">
                <h3> Welcome, {this.props.customer}! to Sports Jeopardy</h3>
                <div id="myDIV">
                    <button className="btn btn-primary" onClick={() => this.setState({ showing: !showing })}>Rules (Collapse/Open)</button>
                    {showing
                        ? <div><h3> The Rules are as follows: </h3>
                            <p><ul>
                                <li>Play individually or in groups.</li>
                                <li>Pick a category and a point value.</li>
                                <li>Click on the chosen box for the question.</li>
                                <li>Participants must give the answer in the form of a question from multiple choice before clicking again. When Clicked again answer will be revealed.</li>
                                <li>Click the card again to return to the main board.</li>
                                <li>If the Participant or team is correct, they are awarded the point value of the question. (Click the "plus" button located on the main board to add the point value to the appropriate team score.)</li>
                                <li>If the Participant or team is not correct -> (Click the "minus" button located on the main board to subtract the point value to the appropriate team score.)</li>
                                <li>Continue until all questions have been answered. The team with the most points wins.</li>
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



