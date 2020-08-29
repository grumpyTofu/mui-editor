import React from 'react';
import { Button, DialogContentText, TextField } from '@material-ui/core';
import EditDialog from '../EditDialog';

export default ({ editing, setEditing, updateSection, section }) => {
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
				href={section.props.link}
				target='_blank'
				rel='noreferrer noopener'
			>
				{section.props.text}
			</Button>
			<EditDialog editing={editing} setEditing={setEditing} title='Update Button'>
				<DialogContentText>
					Enter display text and a link for the button below.
				</DialogContentText>
				<TextField
					autoFocus
					margin='dense'
					label='Button Text'
					value={section.props.text}
					fullWidth
					onChange={event =>
						updateSection(section.id, {
							...section,
							props: {
								...section.props,
								text: event.target.value
							}
						})
					}
				/>
				<TextField
					autoFocus
					margin='dense'
					label='Link'
					fullWidth
					value={section.props.link}
					onChange={event =>
						updateSection(section.id, {
							...section,
							props: {
								...section.props,
								link: event.target.value
							}
						})
					}
				/>
			</EditDialog>
		</div>
	);
};
