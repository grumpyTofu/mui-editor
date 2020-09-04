import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from './Toolbar';
import ContentType from './ContentType';

export default ({ section }) => {
	const [toolbar, setToolbar] = useState(null);
	const [editing, setEditing] = useState(null);
	return (
		<Grid
			container
			onMouseOver={() => setToolbar(section.id)}
			onMouseOut={() => setToolbar(null)}
		>
			<Grid item xs={12}>
				<Toolbar
					active={toolbar === section.id}
					setEditing={setEditing}
					section={section}
				/>
			</Grid>
			<Grid item xs={12}>
				<ContentType
					editing={section.id === editing}
					setEditing={setEditing}
					section={section}
				/>
			</Grid>
		</Grid>
	);
};
