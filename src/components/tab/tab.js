import React from 'react';
import './tab.css'


const tab = props =>{
    return(
        <div>
            <div className="d-flex">
                <a className = { props.giveFeeds ? "active" : null } onClick={ props.feedsToggle} href="#">Give Feeds</a>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <a className = { props.giveFeeds ? null :"active"  } onClick={ props.feedsToggle} href="#">Feeds Given By</a>
            </div>
            <hr/>
        </div>
    )
}

export default tab