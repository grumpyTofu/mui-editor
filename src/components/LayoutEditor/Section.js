import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from './Toolbar';
import ContentType from './ContentType';

export default ({ section }) => {
	const [toolbar, setToolbar] = useState(null);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		if (toolbar !== null && editing === false) {
			setToolbar(null);
		}
	}, [editing]);

	return (
		<Grid
			container
			onMouseOver={() => setToolbar(section.id)}
			onMouseOut={() => setToolbar(null)}
			style={
				toolbar === section.id
					? {
							boxShadow:
								'rgba(63, 81, 181, .14) 0px 2px 1px -1px, rgba(63, 81, 181, .14) 0px 1px 1px 0px, rgba(63, 81, 181, .14) 0px 1px 3px 0px',
							borderRadius: '4px',
					  }
					: {}
			}
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
