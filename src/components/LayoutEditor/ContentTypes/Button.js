import React, { useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	Button: {
		pointerEvents: 'none',
	},
}));

export default props => {
	const classes = useStyles();

	const [state, setState] = useState({
		editing: true,
		open: false,
		link: '',
		buttonText: 'Click Here',
	});

	const [buttonText, setButtonText] = useState(state.buttonText);
	const [buttonLink, setButtonLink] = useState(state.link);

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
				className={classes.Button}
				color='primary'
				size='small'
				variant='outlined'
				component='a'
				href={state.link}
				onClick={event => {
					event.preventDefault();
					setState({ ...state, open: true });
				}}
				onMouseEnter={() => setState({ ...state, editing: true })}
				onMouseOut={() => setState({ ...state, editing: false })}
				{...props}
			>
				{state.buttonText}
			</Button>
			<Dialog
				open={state.open}
				onClose={() =>
					setState({ ...state, editing: false, open: false })
				}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>Update Button</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Enter a link and display text for the button below.
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						label='Button Text'
						defaultValue={buttonText}
						fullWidth
						onChange={event => setButtonText(event.target.value)}
					/>
					<TextField
						autoFocus
						margin='dense'
						label='Link'
						fullWidth
						defaultValue={buttonLink}
						onChange={event => setButtonLink(event.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() =>
							setState({ ...state, editing: false, open: false })
						}
						color='primary'
					>
						Cancel
					</Button>
					<Button
						onClick={() =>
							setState({
								...state,
								editing: false,
								open: false,
								buttonText: buttonText,
								link: buttonLink,
							})
						}
						color='primary'
					>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
