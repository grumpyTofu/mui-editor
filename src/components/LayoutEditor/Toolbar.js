import React, { useContext } from 'react';
import { StoreContext } from './Store';
import { Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	toolbar: {
		height: '100% !important',
		'& .MuiSvgIcon-root': {
			fontSize: '1.2rem',
		},
		'& .MuiGrid-item': {
			display: 'flex',
			justifyContent: 'flex-start',
			alignItems: 'center',
			padding: '0 1rem',
		},
		'& .MuiIconButton-root': {
			padding: '2px',
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
				<IconButton onClick={() => actions.deleteSection(section.id)}>
					<DeleteIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
};
