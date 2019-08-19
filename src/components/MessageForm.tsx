import '../css/MessageForm.css';

import React from "react";

interface Props {
  onSubmit: (value:string) => void
}

interface State {
  message: string;
}

class MessageForm extends React.Component<Props,State>{
  public state: State = {
    message: ""
  }

  private handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState({
      message: inputValue,
    });
 }
  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
  }

  render() { 
    return (
      <form className = "message-form" onSubmit={this.handleSubmit}>
        <div form-group = "form-group">
          <input className = "form-control" value={this.state.message} type="text" onChange={(e) => {this.handleClick(e)}} placeholder="Type a message..."/>
          <input className = "message-button" type="submit" value="Send"/>
        </div>
      </form>
    )
  }
}

export default MessageForm;