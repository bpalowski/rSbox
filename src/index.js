import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: null,
			errorMsg: ''
		};
		window.navigator.geolocation.getCurrentPosition(
			pos => {
				this.setState({
					lat: pos.coords.latitude
				})
			},
			err => {
				this.setState({
					errorMsg: err.message
				})
			}
		);
	}
	render() {
		if (this.state.errorMsg && !this.state.lat) {
			return <div> Err: {this.state.errorMsg}</div>
		}
		if (!this.state.errorMsg && this.state.lat) {
			return <div>
				<h1>Lattitude: {this.state.lat}  </h1>
			</div>
		}
		return <div>Loading !</div>
	}

}

ReactDOM.render(<App />, document.getElementById('root'));
