import React from 'react';
import './App.css';
import axios from 'axios';

import UserCardList from './components/UserCardList';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

componentDidMount() {
  axios
  .get("https://api.github.com/users/Alisa1989")
  .then((response) => {
    console.log("app.js", response.data)
    this.setState({user: response.data})
  });

  axios
  .get("https://api.github.com/users/Alisa1989/followers")
  .then((response)=>{
    console.log("app.js followers", response.data)
    this.setState({followers: response.data})
  })
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <UserCardList user={this.state.user} followers={this.state.followers}/>
      </header>
    </div>
  );
  }
}

export default App;
