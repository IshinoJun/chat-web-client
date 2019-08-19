import '../css/App.css';

import React from 'react';
import ChatBox from './ChatBox';

class App extends React.PureComponent {
  render() {
    return( 
      <div className="App">
        <header className="App-header">
          <ChatBox />
        </header>
      </div>
    )
  }
}
export default App;
