import React, { Component } from 'react';
import CoffeeBearBar from './CoffeeBearBar';
import '../css/App.css';
import AddUser from '../containers/AddUser'
import UserList from '../containers/UserList'

class App extends Component {
    render() {
        return (
            <div className="App">
            <header>
                <CoffeeBearBar />
            </header>
                <AddUser />
                <div class="flex">
                    <div>
                    <p>Not Done</p>
                    <UserList />
                    </div>
                    <div>
                    <p>Done</p>
                    <UserList />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
