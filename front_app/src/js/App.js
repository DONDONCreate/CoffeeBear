import React, { Component } from 'react';
import UserTables from './UserTables';
import CoffeeBearBar from './CoffeeBearBar';
import '../css/App.css';


class App extends Component {

    render() {
        return (
            <div className="App">
                <header>
                <CoffeeBearBar />
                </header>
                <div class="flex">
                <div>
                <h1>Not Done</h1>
                <UserTables />
                </div>
                <div>
                <h1>Done</h1>
                <UserTables />
                </div>
                </div>
            </div>
        );
    }
}

export default App;
