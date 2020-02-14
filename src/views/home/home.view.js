import React, {Component} from 'react';
import './home.style.css';


import TodoListComponent from './TodoListComponent';


class HomeView extends Component {
	render() {
		return (
			<div className="container h-100">
				<div className="row h-100 justify-content-center align-items-center">
					<div className="col-6">
						<TodoListComponent />
					</div>
				</div>
			</div>
		)
	}
}

export default HomeView;
