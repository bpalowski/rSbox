import React from 'react'

class SearchBar extends React.Component {
	state = {
		term: ''
	}
	// onInputChange(e) {
	// 	console.log(e.target.value);
	// }
	// onInputClick() {
	// 	console.log("there has been a change")
	// }

	render() {

		return (

			<div className="ui segment">

				<form className="ui form">

					<div className="field">

						<label htmlFor="">Image Search</label>

						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })} />

					</div>
					<h1>{this.state.term}</h1>

				</form>

			</div>

		);

	}

}



export default SearchBar