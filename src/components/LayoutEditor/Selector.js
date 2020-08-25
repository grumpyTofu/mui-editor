import React, { useState, useEffect } from 'react';
import { Card, CardActions, Fab, Menu, MenuItem, Collapse } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	editorMenu: {
		position: 'fixed',
		bottom: '1.5rem',
		right: '1.5rem'
	}
	// fab: {
	// 	position: 'fixed',
	// 	bottom: '1.5rem',
	// 	right: '1.5rem',
	// },
}));

export default props => {
	const { contentTypes, createSection } = props;

	const classes = useStyles();

	const [state, setState] = useState({
		expanded: false,
		anchorEl: null,
		mousePosition: {
			x: null,
			y: null,
			trackPosition: false
		}
	});

	const handleClick = () => {
		var el = document.getElementById('mui-layout-editor');
		setState({ ...state, anchorEl: el });
	};

	const handleClose = () => {
		setState({ ...state, anchorEl: null });
	};

	const handleSelect = key => {
		createSection(key);
		handleClose();
	};

	const handleEditorHover = () => {
		if (state.mousePosition.trackPosition !== true) {
			setState({
				...state,
				expanded: true,
				mousePosition: {
					...state.mousePosition,
					trackPosition: true
				}
			});
		}
	}

	const updateMousePosition = ev => {
		var rect = Boolean(state.anchorEl) ? state.anchorEl.getBoundingClientRect() : document.getElementById('mui-layout-editor').getBoundingClientRect();
		if (Boolean(state.anchorEl)) console.log(rect);
		if (ev.clientX > rect.right || ev.clientX < rect.left || ev.clientY > rect.bottom || ev.clientY < rect.top) {
			setState({
				...state,
				expanded: false,
				mousePosition: {
					...state.mousePosition,
					x: null,
					y: null,
					trackPosition: false
				}
			});
		} else {
			setState({
				...state,
				mousePosition: {
					...state.mousePosition,
					x: ev.clientX,
					y: ev.clientY
				}
			});
		}
	};

	useEffect(() => {
		if (state.mousePosition.trackPosition === true) {
			window.addEventListener("mousemove", updateMousePosition);
			return () => window.removeEventListener("mousemove", updateMousePosition);
		}
	}, [state.mousePosition.trackPosition]);

	return(
		<Card
			id='mui-layout-editor'
			className={classes.editorMenu}
		>
			<Collapse
				in={state.expanded}
				timeout="auto"
				unmountOnExit
			>
				<CardActions>
					<Fab
						color='secondary'
						aria-label='Add Section'
						className={classes.fab}
						onClick={handleClick}
					>
						<AddIcon />
					</Fab>
					{/* Menu disappears, switch to List and show options conditionally when clicking Add Section */}
					<Menu
						id='simple-menu'
						anchorEl={state.anchorEl}
						keepMounted
						open={Boolean(state.anchorEl)}
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
				</CardActions>
			</Collapse>
			<Fab
				color='secondary'
				aria-label='Add Section'
				// className={classes.fab}
				// onClick={handleClick}
				onMouseOver={handleEditorHover}
				style={{ backgroundColor: '#62e847' }}
			>
				<EditIcon />
			</Fab>
		</Card>
	);
};
