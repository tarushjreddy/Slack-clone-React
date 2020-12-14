import React, { useState, useEffect } from "react";
import "./sidebar.css";
import Sidebaricon from "./sidebaricon.js";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import MessageIcon from "@material-ui/icons/Message";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PeopleIcon from "@material-ui/icons/People";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
function Siderbar() {
  const [channels, setChannels] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="division">
      <hr />
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Developer King</h2>
          <h3 className="progress">
            <FiberManualRecordIcon />@{user.displayName}
          </h3>
        </div>
        {/* <AccountCircleIcon /> */}
        <img src={user.displayName} />
      </div>
      <hr />
      <div className="sidebar_header_one">
        <Sidebaricon Icon={InsertCommentIcon} title="Threads" />
      </div>
      <div className="sidebar_header_one">
        <Sidebaricon Icon={InboxIcon} title="Mentions & Reactions" />
      </div>
      <div className="sidebar_header_one">
        <Sidebaricon Icon={DraftsIcon} title="Saved Drafts" />
      </div>
      <div className="sidebar_header_one">
        <Sidebaricon Icon={BookmarkIcon} title="Bookmarks" />
      </div>
      <div className="sidebar_header_one">
        <Sidebaricon Icon={PeopleIcon} title="People & user groups" />
      </div>
      <div className="sidebar_header_one">
        <Sidebaricon Icon={AppsIcon} title="Apps" />
      </div>
      <div className="sidebar_header_one">
        <Sidebaricon Icon={FileCopyIcon} title="File Browser" />
      </div>
      <div className="sidebar_header_one">
        <Sidebaricon Icon={ExpandLessIcon} title="Show Less" />
      </div>
      <hr />
      <div className="sidebar_header_one">
        <Sidebaricon Icon={AddIcon} addchannelOption title="Add Channels" />
      </div>
      <hr />
      <div className="sidebar_header_one">
        <Sidebaricon Icon={ExpandMoreIcon} title="Channels" />
      </div>
      {channels.map((channel) => (
        <div className="sidebar_header_one">
          <Sidebaricon Icon={AddIcon} title={channel.name} id={channel.id} />
        </div>
      ))}
    </div>
  );
}

export default Siderbar;
