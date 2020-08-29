import React from 'react';
import { List, ListItem, ListItemText, DialogContentText, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditDialog from '../EditDialog';

const useStyles = makeStyles(() => ({
	listItem: {
		'& .MuiListItemText-root.MuiListItemText-multiline': {
			paddingBottom: '.75rem',
			borderBottom: '1px rgba(0, 0, 0, 0.12) solid',
		},
	},
}));

export default ({ editing, setEditing, updateSection, section }) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<List>
				<ListItem
					button
					component='a'
					href={section.props.link}
					target='_blank'
					rel='noreferrer noopener'
					className={classes.listItem}
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
								},
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
								},
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
								},
							})
						}
					/>
				</EditDialog>
			)}
		</React.Fragment>
	);
};
