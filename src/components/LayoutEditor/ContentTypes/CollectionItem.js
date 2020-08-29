import React from 'react';
import { List, ListItem, ListItemText, DialogContentText, TextField } from '@material-ui/core';
import EditDialog from '../EditDialog';

export default ({ editing, setEditing, updateSection, section }) => {
	return (
		<React.Fragment>
			<List>
				<ListItem
					button
					component='a'
					href={section.props.link}
					target='_blank'
					rel='noreferrer noopener'
				>
					<ListItemText
						primary={section.props.primary}
						secondary={section.props.secondary}
					/>
				</ListItem>
			</List>
			{editing && (
				<EditDialog
					editing={editing}
					setEditing={setEditing}
					title='Update Collection Item'
				>
					<DialogContentText>
						Update the title, description, and link for the collection item below
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						label='Title'
						defaultValue={section.props.primary}
						fullWidth
						onChange={event =>
							updateSection(section.id, {
								...section,
								props: {
									...section.props,
									primary: event.target.value,
								}
							})
						}
					/>
					<TextField
						autoFocus
						margin='dense'
						label='Description'
						defaultValue={section.props.secondary}
						fullWidth
						onChange={event =>
							updateSection(section.id, {
								...section,
								props: {
									...section.props,
									secondary: event.target.value,
								}
							})
						}
					/>
					<TextField
						autoFocus
						margin='dense'
						label='Link'
						fullWidth
						defaultValue={section.props.link}
						onChange={event =>
							updateSection(section.id, {
								...section,
								props: {
									...section.props,
									link: event.target.value,
								}
							})
						}
					/>
				</EditDialog>
			)}
		</React.Fragment>
	);
};
