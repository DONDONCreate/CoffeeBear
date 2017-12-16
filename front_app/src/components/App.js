import React, { Component } from 'react';
import CoffeeBearBar from './CoffeeBearBar';
import '../css/App.css';
import AddUser from '../containers/AddUser'
import UserList from '../containers/UserList'

// Main View
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
                    <UserList isDone={false}/>
                    </div>
                    <div>
                    <p>Done</p>
                    <UserList isDone={true}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
