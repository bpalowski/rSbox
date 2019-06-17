import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Season from './Seasom'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			lat: null,
			error: ''
		})
	}
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({
					lat: position.coords.latitude
				})
			},
			err => {
				this.setState({
					error: err.message
				})
			}
		)
	}
	componentDidUpdate() {
		console.log("My component was just updated - it rerendered");
	}

	render() {
		if (this.state.error && !this.state.lat) {
			return <div>Error: {this.state.error}</div>
		}
		if (!this.state.error && this.state.lat) {
			return <Season lat={this.state.lat} />
		}
		return <div>
			Loading
		</div>

	}
}

ReactDOM.render(<App />, document.getElementById('root'));
