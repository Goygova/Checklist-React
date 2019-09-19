import React, { Component } from 'react';
import ToDoData from './ToDoData';
import CheckList from './CheckList';
class App extends Component {
	constructor() {
		super();
		this.state = {
			togo: ToDoData
		};
		this.Destination = this.Destination.bind(this);
	}

	Destination(id) {
		this.setState(prevState => {
			const upToDate = prevState.togo.map(todo => {
				if (todo.id === id) {
					todo.done = !todo.done;
				}
				return todo;
			});
			return {
				togo: upToDate
			};
		});
	}

	render() {
		return (
			<div>
				{this.state.togo.map(item => (
					<CheckList key={item.id} item={item} Destination={this.Destination} />
				))}
			</div>
		);
	}
}

export default App;
