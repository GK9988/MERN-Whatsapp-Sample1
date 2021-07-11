import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  SearchOutlined,
} from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import React, { useState } from "react";
import "./Chat.css";
import axios from "./axios";

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Garv K",
      timestamp: "Just Now",
      received: false,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />

        <div className="chat-header-info">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((message) => {
          const receiverClass = message.received ? "" : "chat-receiver";

          return (
            <p className={`chat-message ${receiverClass}`}>
              <span className="chat-name">{message.name}</span>
              {message.message}
              <span className="chat-timestamp">{message.timstamp}</span>
            </p>
          );
        })}
      </div>
      <div className="chat-footer">
        <InsertEmoticon />
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
          <Mic />
        </form>
      </div>
    </div>
  );
};

export default Chat;
