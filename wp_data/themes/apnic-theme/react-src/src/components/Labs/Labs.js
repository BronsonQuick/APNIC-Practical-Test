import React, { Component } from 'react';
import axios from 'axios';

class Labs extends Component {
	componentDidMount() {
		axios.get('/virtual-labs')
		.then(response => {
			console.log(response.data.virtualLabs)
		})
		.catch((error) => {
			return error;
		});
	}
	render() {
		return (
			<React.Fragment>
				<p>Open the console to see the response from endpoint</p>
			</React.Fragment>
		);
	}
}
export default Labs;
