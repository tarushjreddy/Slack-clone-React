import React, { useState } from "react";
import "./ChatInput.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
function ChatInput({ channelId, ChannelName }) {
  const [input, setInput] = useState(null);
  const [{ user }] = useStateValue();

  const SendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      //   db.collection("rooms").doc(channelId).collection('messages'){
      //     message: input,
      //     user: user.displayName,
      //   });
      db.collection("rooms")
        .doc("aJQXIUBPRPAO6IBUgnx6")
        .collection("messages")
        .add({
          message: input,

          username: user.displayName,
          userImage: user.photoURL,
        });
    }
    console.log(channelId);
  };
  return (
    <div className="Message__sender">
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={SendMessage}>Save</button>
      </form>
    </div>
  );
}

export default ChatInput;
