import React, { Component } from 'react';
import './app.css';
import data from '../data';
import TableData from './TableData';
// import * as audio from './Audio';

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
            return (<td>{category}</td>)
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
                            <th>Value</th>
                            {categoryCellsJSX}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td className='col-md-offset-2 col-md-2 album_cover'> 100 </td>
                            {onepointsJSX}

                        </tr>
                        <tr>
                            <td className='col-md-offset-2 col-md-2 album_cover'> 200 </td>
                            {twopointsJSX}
                        </tr>
                        <tr>
                            <td className='col-md-offset-2 col-md-2 album_cover'> 300 </td>
                            {threepointsJSX}
                        </tr>
                        <tr>
                            <td className='col-md-offset-2 col-md-2 album_cover'> 400 </td>
                            {fourpointsJSX}

                        </tr>
                        <tr>
                            <td className='col-md-offset-2 col-md-2 album_cover'> 500 </td>
                            {fivepointsJSX}

                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};


export default Board;
