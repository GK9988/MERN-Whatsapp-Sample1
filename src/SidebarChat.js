import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

const SidebarChat = () => {
  return (
    <div>
      <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat-info">
          <h2>Room Name</h2>
          <p>This is the last message</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarChat;
