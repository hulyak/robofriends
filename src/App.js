import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
	// add state, state describes the app
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		};
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
		// function() {
		// console.log(this.state.robots);

		// this.setState({ robots: filteredRobots });
	};
	render() {
		const filteredRobots = this.state.robots.filter((robots) => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox searhChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />;
			</div>
		);
	}
}

export default App;
