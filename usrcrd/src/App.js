import React from 'react';
import './App.css';
import axios from 'axios';

import UserCardList from './components/UserCardList';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      login: ""
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

componentDidUpdate(prevState, prevProps) {
  if (prevState.followers !== this.state.followers)
  console.log("followers have changed");

  if (prevState.login !== this.state.login)
  console.log("State updated, user login:", this.state.login)
}

getUsers = () => {
  axios
  .get(`https://api.github.com/users/${this.state.login}`)
  .then((response) => {
    console.log("app.js", response.data)
    this.setState({user: response.data})
  });

  axios
  .get(`https://api.github.com/users/${this.state.login}/followers`)
  .then((response)=>{
    console.log("app.js followers", response.data)
    this.setState({followers: response.data})
  })
};

  handleChanges = (e) => {
    console.log("handleChanges called");
    this.setState({
      ...this.state,
      login: e.target.value
    });
  };

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github Users</h1>
        <input
          type="text"
          value={this.state.login}
          onChange={this.handleChanges}
        />
        <button onClick={this.getUsers}>Find Users</button>
        <UserCardList user={this.state.user} followers={this.state.followers}/>
      </header>
    </div>
  );
  }
}

export default App;
