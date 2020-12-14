import React, { useState, useEffect } from "react";
import "./Messag.css";
import db from "./firebase";
function Messages({ message, timestamp, user, userImage }) {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("rooms")
      .doc("aJQXIUBPRPAO6IBUgnx6")
      .collection("messages")
      .onSnapshot((snapshot) =>
        setChannels(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
          }))
        )
      );
  }, []);
  return (
    <div>
      {/* {channels.map((channel) => ( */}
      <>
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
      </>
      {/* ))}*/}
    </div>
  );
}

export default Messages;
