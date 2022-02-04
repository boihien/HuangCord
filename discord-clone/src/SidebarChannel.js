import React from 'react'
import "./SidebarChannel.css";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice"
import "./SidebarChannel.css";

function SidebarChannel({id, channelName}) {
    const dispatch=useDispatch();

    return (
        <div className="sidebarChannel">
            <h4>
                <span className="sidebarChannel_hash">#</span>
                {channelName}
            </h4>
        </div>
    );
}


export default SidebarChannel;