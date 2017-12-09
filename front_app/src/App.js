import React, { Component } from 'react';
import UserTables from './UserTables';
import './App.css';


class App extends Component {

    render() {
        return (
            <div className="App">
                <div class="flex">
                <div>
                <p>Not Done</p>
                <UserTables />
                </div>
                <div>
                <p>Done</p>
                <UserTables />
                </div>
                </div>
            </div>
        );
    }
}

export default App;
