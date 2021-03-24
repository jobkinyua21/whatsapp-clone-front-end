import React from 'react';
import "./SidebarChat.css";
import {Avatar} from "@material-ui/core";


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>room name</h2>
                <p>thus is dancerum</p>
            </div>
            
        </div>  
    );
}

export default SidebarChat
