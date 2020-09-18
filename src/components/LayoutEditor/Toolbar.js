import React, { useContext } from 'react';
import { StoreContext } from './Store';
import { Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import EditIcon from '@material-ui/icons/Edit';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	toolbar: {
		height: '100% !important',
		backgroundColor: '#3F51B5',
		borderTopLeftRadius: '4px',
		borderTopRightRadius: '4px',
		'& .MuiSvgIcon-root': {
			fontSize: '1.2rem',
		},
		'& .MuiGrid-item': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '0 1rem',
		},
		'& .MuiIconButton-root': {
			padding: '2px',
			color: 'white',
		},
		'& button': {
			margin: '0 .5rem',
		},
	},
});

export default ({ active, setEditing, section }) => {
	const classes = useStyles();
	const { actions } = useContext(StoreContext);
	return (
		<Grid
			container
			className={classes.toolbar}
			style={active ? { display: 'flex' } : { display: 'none' }}
		>
			<Grid item xs={12}>
				<IconButton
					onClick={() => {
						actions.updateSectionOrder(section.id, section.pageOrder - 1);
					}}
				>
					<KeyboardArrowUpIcon />
				</IconButton>
				<IconButton
					onClick={() => {
						actions.updateSectionOrder(section.id, section.pageOrder + 1);
					}}
				>
					<KeyboardArrowDownIcon />
				</IconButton>
				<IconButton
					onClick={() => {
						setEditing(section.id);
					}}
				>
					<EditIcon />
				</IconButton>
				<IconButton onClick={() => actions.openGridEdit(section)}>
					<ViewCompactIcon />
				</IconButton>
				<IconButton onClick={() => actions.deleteSection(section.id)}>
					<DeleteIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
};
