import React from "react";
import "./Messag.css";
function Messages({ message, timestamp, user, userImage }) {
  return (
    <div>
      <div className="Chat_headder">
        <img className="logo_chat" src={userImage} />
        <h4 className="username_chat">{user}</h4>
        <p className="update">Updated on..</p>
        {/* <p className="update_time">
          {new Date(timestamp?.toDateString()).toUTCString()}
        </p> */}
      </div>
      <div className="Chat_Message">{message}</div>
      <hr />
    </div>
  );
}

export default Messages;
