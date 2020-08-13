import React, { useState } from 'react';
import { Typography, Divider, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	TextField: {
		'& .MuiInput-underline:before': {
			borderBottom: 'none',
		},
		'& .MuiInput-underline:after': {
			borderBottom: 'none',
		},
		'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
			borderBottom: 'none',
		},
		'& input.MuiInputBase-input.MuiInput-input': {
			margin: 0,
			marginBottom: '0.35em',
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: '2.125rem',
			fontWeight: 400,
			lineHeight: 1.235,
			letterSpacing: '0.00735em',
			textAlign: 'center',
			padding: 0,
		},
	},
}));

export default props => {
	const classes = useStyles();
	const [value, setValue] = useState('Title Text');
	const [editing, setEditing] = useState(false);
	return (
		<div style={{ marginBottom: '1.5rem' }}>
			{editing ? (
				<TextField
					className={classes.TextField}
					defaultValue={value}
					onBlur={() => setEditing(false)}
					onChange={event => setValue(event.target.value)}
				/>
			) : (
				<Typography
					variant='h4'
					gutterBottom
					onMouseOver={() => setEditing(true)}
				>
					{value}
				</Typography>
			)}
			<div style={{ width: '25%' }}>
				<Divider style={{ height: '2px', backgroundColor: 'orange' }} />
			</div>
		</div>
	);
};
