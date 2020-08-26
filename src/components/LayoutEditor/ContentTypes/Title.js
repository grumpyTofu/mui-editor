import React, { useState } from 'react';
import {
	Typography,
	Divider,
	TextField,
	DialogContentText
} from '@material-ui/core';
import EditDialog from '../EditDialog';


export default props => {

	const { editing, setEditing } = props;
	const [value, setValue] = useState('Title Text');

	return (
		<React.Fragment>
			<div style={{ marginBottom: '1.5rem' }}>
				<Typography variant='h4'gutterBottom>
					{value}
				</Typography>
				<div style={{ width: '25%' }}>
					<Divider style={{ height: '2px', backgroundColor: 'orange' }} />
				</div>
			</div>
			{editing &&
				<EditDialog
					editing={editing}
					setEditing={setEditing}
					title='Update Title'
				>
					<DialogContentText>
						Please update the title text below
					</DialogContentText>
					<TextField
						defaultValue={value}
						onChange={event => setValue(event.target.value)}
					/>
				</EditDialog>
			}
		</React.Fragment>
	);
};
