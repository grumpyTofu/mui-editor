import React from 'react';
import { Typography, Divider, TextField, DialogContentText } from '@material-ui/core';
import EditDialog from '../EditDialog';

export default ({ editing, setEditing, updateSection, section }) => {
	return (
		<React.Fragment>
			<div style={{ marginBottom: '1.5rem' }}>
				<Typography variant='h4' gutterBottom style={{ textAlign: 'center' }}>
					{section.props.text}
				</Typography>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Divider style={{ height: '2px', backgroundColor: 'orange', width: '25%' }} />
				</div>
			</div>
			{editing && (
				<EditDialog editing={editing} setEditing={setEditing} title='Update Title'>
					<DialogContentText>Please update the title text below</DialogContentText>
					<TextField
						defaultValue={section.props.text}
						onChange={event =>
							updateSection(section.id, {
								...section,
								props: {
									...section.props,
									text: event.target.value,
								},
							})
						}
					/>
				</EditDialog>
			)}
		</React.Fragment>
	);
};
