import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

export default ({ children, editing, setEditing, title }) => {
	return (
		<Dialog
			open={editing}
			onClose={() => setEditing(false)}
			aria-labelledby='form-dialog-title'
		>
			<DialogTitle id='form-dialog-title'>{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button onClick={() => setEditing(false)} color='primary'>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};
