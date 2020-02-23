import React, { Component } from 'react';
import Lab from './Lab';
import Spinner from '../../UI/Spinner/Spinner';
import axios from 'axios';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

class Labs extends Component {
	state = {
		labs: null,
		total: null
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log(prevProps);
		console.log(prevState);
		console.log(this.state);
		console.log('updated');
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
						demoURL: lab.labDemoURL,
						index: null
					}
				}
			);
			this.setState({labs: labs, total: virtualLabs.length });
		})
		.catch((error) => {
			return error;
		});
	}
	handleRLDDChange(newItems) {
		this.setState({ labs: newItems });
	}
	itemRenderer(item, index) {
		return (
			<Lab className="item" key={item.id} name={item.name} index={index} />
		);
	  }

	render() {
		let labs = <Spinner />;
		
		if ( this.state.labs ) {
			labs = <RLDD
				items={this.state.labs}
				itemRenderer={this.itemRenderer.bind(this)}
				onChange={this.handleRLDDChange.bind(this)}
			/>
		}
		return (
			<React.Fragment>
				{labs}
			</React.Fragment>
		);
	}
}
export default Labs;
