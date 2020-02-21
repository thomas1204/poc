import React, {Component, Fragment} from 'react';
import 'bootstrap';
import $ from 'jquery';
import AddTodoMutation from "./AddTodoMutation";

class AddTodoComponent extends Component {
	
	toggleAddTodoModal = (status) => {
		$('#addTodoModal').modal(status)
	};
	
	handleSubmit = () => {
		const todoValue = document.getElementById('addTodoInput').value;
		const todo = {
			title: todoValue,
			done: false
		};
		AddTodoMutation.commit(todo);
		$('#addTodoModal').modal('hide')
	};
	
	
	render() {
		return (
			<Fragment>
				
				<div className="col-4">
					<button type="button" className="btn btn-dark btn-block" onClick={() => this.toggleAddTodoModal('show')}>
						Add todo
					</button>
				</div>
				
				{/* Add todo modal*/}
				<div className="modal" id="addTodoModal">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							
							<div className="closeButtonSection">
								<button onClick={() => this.toggleAddTodoModal('hide')}>
									<i className="fas fa-times"/>
								</button>
							</div>
							
							<div className="addInputSection">
								<div className="row">
									<div className="col-12">
										<input
											type="text"
											className="form-control"
											placeholder="Add new todo"
											id="addTodoInput"
										/>
									</div>
									<div className="col-12">
										<button className="btn btn-dark btn-block" onClick={() => this.handleSubmit()}>
											Add
										</button>
									</div>
								</div>
							</div>
						
						</div>
					</div>
				</div>
			
			
			</Fragment>
		)
	}
}

export default AddTodoComponent;