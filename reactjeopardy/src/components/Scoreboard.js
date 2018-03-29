import React, { Component } from 'react';
import './app.css';

class ScoreBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teamOne: 0,
            teamTwo: 0
        }
    }

    resetScore() {
        this.setState({ teamOne: 0, teamTwo: 0 })
    }

    addOneTeamOne() {
        let teamOne = this.state.teamOne
        teamOne = teamOne + 100
        this.setState({ teamOne: teamOne })
    }

    minusOneTeamOne() {
        let teamOne = this.state.teamOne
        teamOne = teamOne - 100
        if (teamOne >= 0) {
            this.setState({ teamOne: teamOne })
        }
    }

    addOneTeamTwo() {
        let teamTwo = this.state.teamTwo
        teamTwo = teamTwo + 100
        this.setState({ teamTwo: teamTwo })
    }

    minusOneTeamTwo() {
        let teamTwo = this.state.teamTwo
        teamTwo = teamTwo - 100
        if (teamTwo >= 0) {
            this.setState({ teamTwo: teamTwo })
        }
    }

    render() {
        return (
            <div className="scoreboard">
                <div className="scoreboard1">
                    <h4 className="home">Team 1</h4>
                    <div className="score">{this.state.teamOne}</div>
                    <div>
                        <a className="add_button teamOne" onClick={() => this.addOneTeamOne()}>(+100)</a> -- or --
                        <a className="minus_button teamOne-subtract1" onClick={() => this.minusOneTeamOne()}>  (-100)</a>
                    </div>
                </div>

                <a className="reset" onClick={this.resetScore.bind(this)}>NEW GAME</a>

                <div className="scoreboard2">
                    <h4 className="away">Team 2</h4>
                    <div className="score">{this.state.teamTwo}</div>
                    <div>
                        <a className="add_button teamTwo" onClick={() => this.addOneTeamTwo()}>(+100)</a> -- or --
                        <a className="minus_button teamTwo-subtract2" onClick={() => this.minusOneTeamTwo()}>   (-100)</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScoreBoard;