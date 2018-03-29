import React, { Component } from 'react';
import './app.css';

class TableData extends Component {
    state = {
        clickCount: 0
    }

    clickIncrementer = () => {
        console.log(this.state.clickCount)
        if (this.state.clickCount < 2) {
            this.setState({ clickCount: this.state.clickCount + 1 })
        }
    }

    stateHandler = (props) => {

        if (this.state.clickCount === 0) {
            return (<img src='../images/sports2.jpg' />)
        } else if (this.state.clickCount === 1) {
            return (<h5>{this.props.data.question}</h5>)
        } else if (this.state.clickCount === 2) {
            return (<h3>{this.props.data.answer}</h3>)
        }
    }

    pointsHandler = (props) => {
        if (this.state.clickCount === 0) {
            return ((<h5>{this.props.data.points}</h5>))
        }
    }

    render() {
        let data = this.stateHandler()
        let data1 = this.pointsHandler()
        return (

            <td className='album_cover' onClick={this.clickIncrementer} >
                {data1}
                {data}
            </td>
        )
    }
}


export default TableData;