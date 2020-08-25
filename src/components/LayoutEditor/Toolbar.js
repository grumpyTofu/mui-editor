import React from 'react';
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
			justifyContent: 'flex-end',
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

const customEditTypes = ['text', 'hero'];

export default props => {
	const { active, setEditing, deleteSection, updateSection, section } = props;

	const classes = useStyles();
	return (
		<Grid
			container
			className={classes.toolbar}
			style={active ? { display: 'flex' } : { display: 'none' }}
		>
			<Grid item xs={12}>
				<IconButton
					onClick={() => {
						updateSection(section.id, section.pageOrder - 1);
					}}
				>
					<KeyboardArrowUpIcon />
				</IconButton>
				<IconButton
					onClick={() => {
						updateSection(section.id, section.pageOrder + 1);
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
				<IconButton onClick={() => deleteSection(section.id)}>
					<DeleteIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
};
