import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import faker from 'faker';
import ApprovalCArd from './ApprovalCard';

import Comment from './Comment'
const App = () => {
	return (

		<div className="ui container comments">
			<br />
			<ApprovalCArd >
				<div>
					<h4>Warning</h4>
				</div>
			</ApprovalCArd>



			<ApprovalCArd >
				<Comment
					author={faker.name.firstName()} content="Nice Job" />
			</ApprovalCArd>

			<ApprovalCArd >
				<Comment
					author={faker.name.firstName()} content="Me like" />
			</ApprovalCArd>

			<ApprovalCArd >
				<Comment
					author={faker.name.firstName()} content="Yes" />
			</ApprovalCArd>
		</div>

	)
}

ReactDOM.render(<App />, document.getElementById('root'));
