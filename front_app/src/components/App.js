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
                <UserList />
            </div>
        );
    }
}

export default App;
