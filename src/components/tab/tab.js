import React from 'react';
import './tab.css'


const tab = props =>{
    return(
        <div>
            <div className="d-flex">
                <a className = { props.giveFeeds ? "active" : null } onClick={props.feedsGiveHanlder} href="#">Give Feeds</a>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <a className = { props.feedsGivenBy ? "active" : null } onClick={props.feedsGivenByHandler} href="#">Feeds Given By</a>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <a className = { props.feedsGivenTo ? "active" : null } onClick={props.feedsGivenToHandler} href="#">Feeds Given To</a>
            </div>
            <hr/>
        </div>
    )
}

export default tab