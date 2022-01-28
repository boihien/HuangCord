import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Message.css";
function Message() {
  return <div className='message'>
      <Avatar />
      <div className="message_info">
          <h4>
              bhuan019
              <span className='message_timestamp'>this is a timestamp</span>
          </h4>
          <p>This is a message</p>
      </div>
  </div>;
}

export default Message;
