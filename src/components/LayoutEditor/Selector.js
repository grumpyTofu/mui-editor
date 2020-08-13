import React from 'react';
import { Fab, Menu, MenuItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	fab: {
		position: 'fixed',
		bottom: '1.5rem',
		right: '1.5rem',
	},
}));

export default props => {
	const { contentTypes, createSection } = props;

	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSelect = key => {
		createSection(key);
		handleClose();
	};

	return (
		<React.Fragment>
			<Fab
				color='secondary'
				aria-label='Add Section'
				className={classes.fab}
				onClick={handleClick}
			>
				<AddIcon />
			</Fab>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{Object.keys(contentTypes).map(key => (
					<MenuItem
						onClick={() => handleSelect(key)}
						key={`MenuItem_${key}`}
					>
						{key}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);
};
