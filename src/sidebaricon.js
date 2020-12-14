import React from "react";
import "./sidebaricon.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";
function Sidebaricon({ Icon, title, id, addchannelOption }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/rooms/${id}`);
    } else {
      console.log("ene");
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name here\n");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="option"
      onClick={addchannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon />}

      {Icon ? (
        <h3 className="tag-line">{title}</h3>
      ) : (
        <h3 className="tag-line">#{title}</h3>
      )}
    </div>
  );
}

export default Sidebaricon;
