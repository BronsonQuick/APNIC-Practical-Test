import React, { Component } from 'react';
import Lab from './Lab';
import Spinner from '../../UI/Spinner/Spinner';
import axios from 'axios';

class Labs extends Component {
	state = {
		labs: null,
		total: null
	}

	componentDidMount() {
		axios.get('/virtual-labs')
		.then(response => {
			const virtualLabs = response.data.virtualLabs;
			
			let labs = virtualLabs.map( lab => {
					return {
						id: lab.id,
						name: lab.name,
						description: lab.description,
						durationMinutes: lab.durationMinutes,
						formattedDuration: lab.formattedDuration,
						URL: lab.viewDetailsURL,
						image: lab.thumbnail,
						language: lab.language,
						demoName: lab.labDemoName,
						demoURL: lab.labDemoURL
					}
				}
			);
			this.setState({labs: labs, total: virtualLabs.length });
		})
		.catch((error) => {
			return error;
		});
	}
	render() {
		let lab = <Spinner />;
		
		if ( this.state.labs ) {
			const labs = this.state.labs;
			lab = labs.map( key => {
				return <Lab key={key.id} name={key.name} />
			})
		}
		return (
			<React.Fragment>
				<ul>
					{lab}
				</ul>
			</React.Fragment>
		);
	}
}
export default Labs;
