import React, { Component } from 'react';
import './app.css';
// import Teams from './Teams'
// import * as audio from './Audio';

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
            return (<h1>{this.props.data.question}</h1>)
        } else if (this.state.clickCount === 2) {
            return (<h1>{this.props.data.answer}</h1>)
        }
    }

    render() {
        let data = this.stateHandler()
        return (

            <td className='album_cover' onClick={this.clickIncrementer} >

                {data}
            </td>
        )
    }
}


export default TableData;