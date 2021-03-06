import React, { useState } from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice"
import db, { auth } from "./firebase";
import { useEffect } from 'react';

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("channels").onSnapshot((snapshot) => 
            //if anything changes update it (snapshot)
            setChannels(
                snapshot.docs.map(doc=>({
                    id: doc.id,
                    channel: doc.data(), //channelName
                }))
            )
        );
    }, []);

    const handleAddChannel = () =>{
        const channelName=prompt('Enter a new channel name');

        if(channelName){
            db.collection("channels").add({
                channelName: channelName,
            });
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>HuangCord</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar_channels">
    
            </div>
            <div className="sidebar_profile">
                <Avatar onClick={() => auth.signOut()} src={user.photo}/>
                <div className="sidebar_profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
