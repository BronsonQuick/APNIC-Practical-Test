import React from 'react';
import classes from '../Spinner/Spinner.module.css'

const spinner = () => (
	<React.Fragment>
		<div className={classes.Loader}></div>
		<p>Loading labs...</p>
	</React.Fragment>
);

export default spinner;
