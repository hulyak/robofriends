import React, { Component } from 'react';
import CardList from '../components/CardList';
// import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
    console.log(constructor);
  }
  //fetch the robots as soon as we run the component
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    // console.log(componentDidMount);
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });

    // function() {
    // console.log(this.state.robots);

    // this.setState({ robots: filteredRobots });
  };

  render() {
    const { robots, searchfield } = this.state;
    //change robots according to search field
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // console.log('render');
    //if api doesn't return robots quickly add condition
    // if (!robots.length) {
    //   return <h1>Loading</h1>;
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />;
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
