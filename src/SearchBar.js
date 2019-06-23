import React from 'react'

class SearchBar extends React.Component {

	onInputChange(e) {
		console.log(e.target.value);
	}
	onInputClick() {
		console.log("there has been a change")
	}

	render() {

		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label htmlFor="">Image Search</label>
						<input type="text"
							onClick={this.onInputClick} onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);

	}
}



export default SearchBar