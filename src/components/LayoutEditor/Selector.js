import React, { useContext } from 'react';
import { Card, CardActions, Fab, Menu, MenuItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import contentTypes from './ContentTypes';
import { StoreContext } from './Store';

const useStyles = makeStyles(() => ({
	card: {
		position: 'fixed',
		bottom: '1.5rem',
		right: '1.5rem',
		background: 'transparent',
	},
}));

export default ({ saveData }) => {
	const { actions } = useContext(StoreContext);

	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSelect = key => {
		actions.createSection({
			contentType: key,
			props: contentTypes[key].props,
		});
		handleClose();
	};

	return (
		<Card elevation={0} className={classes.card}>
			<CardActions>
				<Fab color='primary' aria-label='Add Section' onClick={saveData}>
					<SaveIcon />
				</Fab>
				<Fab color='secondary' aria-label='Add Section' onClick={handleClick}>
					<AddIcon />
				</Fab>
			</CardActions>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{Object.keys(contentTypes).map(key => (
					<MenuItem onClick={() => handleSelect(key)} key={`MenuItem_${key}`}>
						{key}
					</MenuItem>
				))}
			</Menu>
		</Card>
	);
};
