import React, { Component } from 'react';
import './app.css';

class Footer extends Component {

    render() {
        return (
            <div className='footer'>
                <iframe scrolling="yes"
                    title="sportsinfo"
                    src="http://www.sportsoverdose.com/team-widget/mlb/new-york-yankees?size=300"
                    frameborder="0"></iframe>
            </div>
        );
    }

};

export default Footer;