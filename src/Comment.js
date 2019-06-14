import React from 'react'
import faker from 'faker';
const Comment = (props) => {
	let today = new Date();
	let time = today.getHours() + ":" + today.getMinutes();
	return (



		<div className="comment">
			<a href="/" className="avatar">
				<img src={faker.image.avatar()}
					alt="Avatar" />
			</a>

			<div className="content">

				<a style={{ color: "green" }} href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="data">{time}</span>
				</div>
				<div className="text">
					{faker.lorem.sentences()}
				</div>
				<div className="text">
					<strong>	{props.content}</strong>
				</div>
			</div>
		</div>

	)
}


export default Comment