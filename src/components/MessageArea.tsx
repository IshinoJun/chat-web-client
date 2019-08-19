import '../css/MessageArea.css';

import React from "react";

interface props {
  messages: string[];
}

class MessageArea extends React.Component<props> {
  render() {
    const messages = this.props.messages;

    return (
      <ul className="message-area">
        {messages.map((message,index) => (
          <li key = {index} className="chat-message"><p>{message}</p></li>
        ))}
      </ul>
    )
  }
}

export default MessageArea;