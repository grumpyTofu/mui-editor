import React, { useState } from 'react';
import { List, ListItem, ListItemText, DialogContentText, TextField } from '@material-ui/core';
import EditDialog from '../EditDialog';

export default ({ editing, setEditing, primary, secondary, link }) => {
	const [collectionItem, setCollectionItem] = useState({
		primary: primary || 'Intial Content',
		secondary: secondary || 'Some brief description',
		link: link || '',
	});

	return (
		<React.Fragment>
			<List>
				<ListItem
					button
					component='a'
					href={collectionItem.link}
					target='_blank'
					rel='noreferrer noopener'
					onClick={event => {
						event.preventDefault();
					}}
				>
					<ListItemText
						primary={collectionItem.primary}
						secondary={collectionItem.secondary}
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
						defaultValue={collectionItem.primary}
						fullWidth
						onChange={event =>
							setCollectionItem({
								...collectionItem,
								primary: event.target.value,
							})
						}
					/>
					<TextField
						autoFocus
						margin='dense'
						label='Description'
						defaultValue={collectionItem.secondary}
						fullWidth
						onChange={event =>
							setCollectionItem({
								...collectionItem,
								secondary: event.target.value,
							})
						}
					/>
					<TextField
						autoFocus
						margin='dense'
						label='Link'
						fullWidth
						defaultValue={collectionItem.link}
						onChange={event =>
							setCollectionItem({
								...collectionItem,
								link: event.target.value,
							})
						}
					/>
				</EditDialog>
			)}
		</React.Fragment>
	);
};
