import React, { useEffect, useState } from "react";
import "./chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import db from "./firebase";
import Messages from "./Messages.js";
import { useStateValue } from "./StateProvider";
import ChatInput from "./ChatInput.js";
function Chat() {
  const { roomId } = useParams();
  const [{ user }, dispatch] = useStateValue();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomDetailsMessage, setRoomDetailsMessage] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomDetailsMessage(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  console.log(roomDetails);
  console.log(roomDetailsMessage);
  // snapshot => setRoomDetailsMessage(snapshot.doc.map(doc => doc.data())
  return (
    <div className="chatting">
      <div className="chat__header">
        <div className="chatLeft">
          {user.displayName}
          <StarBorderIcon />
        </div>
        <div className="chatLeft">{roomDetails?.name}</div>
        <div className="chatRight">
          <InfoIcon />
          Details
        </div>
      </div>
      <div className="chat__message">
        {roomDetailsMessage.map(
          ({ message, timestamp, username, userImage }) => (
            <Messages
              message={message}
              timestamp={timestamp}
              user={username}
              userImage={userImage}
            />
          )
        )}
      </div>
      <ChatInput
        channelId={roomDetails?.name}
        ChannelName={roomDetails?.name}
      />
    </div>
  );
}

export default Chat;
