import React from 'react';
import { Typography, Divider } from '@material-ui/core';

export default props => {
	return (
		<div style={{ marginBottom: '1.5rem' }}>
			<Typography variant='h4' gutterBottom>Title Text</Typography>
			<div style={{ width: '25%' }}>
				<Divider style={{ height: '2px', backgroundColor: 'orange' }}/>
			</div>
		</div>
	);
}
