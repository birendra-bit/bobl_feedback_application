import React from 'react';
import './tab.css'


const tab = props =>{
    return(
        <div>
            <div className="d-flex">
                <a className = { props.give_feeds ? "active" : null } onClick={props.feedsGive} href="#">Give Feeds</a>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <a className = { props.feeds_given_by ? "active" : null } onClick={props.feedsGiveBy} href="#">Feeds Given By</a>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <a className = { props.feeds_given_to ? "active" : null } onClick={()=> props.feedsGivenTo} href="#">Feeds Given To</a>
            </div>
            <hr/>
        </div>
    )
}

export default tab