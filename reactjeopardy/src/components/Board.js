import React, { Component } from 'react';
import './app.css';
import data from '../data';
import TableData from './TableData';

class Board extends Component {
    render() {

        let categories = []
        let onepoints = []
        let twopoints = []
        let threepoints = []
        let fourpoints = []
        let fivepoints = [];

        data.map(item => {
            categories.push(item.category)
            onepoints.push(item.questions[0])
            twopoints.push(item.questions[1])
            threepoints.push(item.questions[2])
            fourpoints.push(item.questions[3])
            fivepoints.push(item.questions[4])
        })

        let categoryCellsJSX = categories.map(category => {
            return (<td className="categories">{category}</td>)
        })

        let onepointsJSX = onepoints.map(item => {
            return (<TableData data={item} />)
        });

        let twopointsJSX = twopoints.map(item => {
            return (<TableData data={item} />)
        });

        let threepointsJSX = threepoints.map(item => {
            return (<TableData data={item} />)
        });

        let fourpointsJSX = fourpoints.map(item => {
            return (<TableData data={item} />)
        });

        let fivepointsJSX = fivepoints.map(item => {
            return (<TableData data={item} />)
        });

        return (

            <div className="container" >
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            {categoryCellsJSX}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {onepointsJSX}
                        </tr>
                        <tr>
                            {twopointsJSX}
                        </tr>
                        <tr>
                            {threepointsJSX}
                        </tr>
                        <tr>
                            {fourpointsJSX}
                        </tr>
                        <tr>
                            {fivepointsJSX}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};


export default Board;