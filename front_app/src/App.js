import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserTables from './UserTables';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <UserTables />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
