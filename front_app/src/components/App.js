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
              <CoffeeBearBar />
              <AddUser />
              <div class="flex" style={{height:"400px"}} >
                <div>
                  <UserList isDone={false}/>
                </div>
                <div>
                  <UserList isDone={true}/>
                </div>
              </div>
            </div>
        );
    }
}

export default App;
