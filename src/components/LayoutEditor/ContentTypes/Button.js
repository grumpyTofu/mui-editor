import React, { useState } from 'react';
import { Button, DialogContentText, TextField } from '@material-ui/core';
import EditDialog from '../EditDialog';

export default props => {

	const { editing, setEditing } = props;

	const [buttonText, setButtonText] = useState('Click Here');
	const [buttonLink, setButtonLink] = useState('');

	return (
		<div
			style={{
				height: 'auto',
				width: 'auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '1rem 0rem',
			}}
		>
			<Button
				color='primary'
				size='small'
				variant='outlined'
				component='a'
				href={buttonLink}
				target='_blank'
				rel='noreferrer noopener'
				onClick={event => {
					event.preventDefault();
				}}
			>
				{buttonText}
			</Button>
			<EditDialog
				editing={editing}
				setEditing={setEditing}
				title='Update Button'
			>
				<DialogContentText>
					Enter display text and a link for the button below.
				</DialogContentText>
				<TextField
					autoFocus
					margin='dense'
					label='Button Text'
					defaultValue={buttonText}
					fullWidth
					onChange={event => setButtonText(event.target.value)}
				/>
				<TextField
					autoFocus
					margin='dense'
					label='Link'
					fullWidth
					defaultValue={buttonLink}
					onChange={event => setButtonLink(event.target.value)}
				/>
			</EditDialog>
		</div>
	);
};
