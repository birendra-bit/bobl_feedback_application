import React from 'react';
import './tab.css'


const tab = props =>{
    return(
        <div>
            <div className="d-flex">
                <a className = { props.give_feeds ? "active" : null } onClick={props.viewFeeds} href="#">Give Feeds
                </a>
                &nbsp;&nbsp; | &nbsp;&nbsp; 
                <a className = { props.feeds_giver ? "active" : null } onClick={props.viewFeedsGiver} href="#">Feeds Giver</a>
            </div>
            <hr/>
        </div>
    )
}

export default tab