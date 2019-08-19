import '../css/ChatBox.css';

import React from "react";
import MessageArea from './MessageArea';
import MessageForm from './MessageForm';

interface State {
  messages: string[];
}

class ChatBox extends React.Component<{},State> {
  public state: State = {
    messages: [],
  }


  private setMessage(value:string) {
    this.setState({
      messages: this.state.messages.concat(value)
    })
  }

  public render() {
    return (
      <div className="chat-page">
        <div className="chat-container">
          <div className="chat-header">
            <h2>Chat App</h2>
          </div>
          <MessageArea messages = {this.state.messages}/>
          <MessageForm onSubmit = {this.setMessage.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default ChatBox
