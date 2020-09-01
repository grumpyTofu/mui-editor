import React, { useState, useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Selector from './Selector';
import Toolbar from './Toolbar';
import ContentType from './ContentType';
import withStore, { StoreContext } from './Store';


export default withStore(props => {

	const { state, actions } = useContext(StoreContext);

	const output =
		props.output ||
		function (outputHtml, outputEditorConfig) {
			console.warn('Please set up an output function.', outputHtml, outputEditorConfig);
		};

	const saveData = () => {
		var content = document.getElementById('mui-layout-editor').innerHTML;
		output(content, state.sections);
	};

	useEffect(() => {
		if (props.data && state.checkedProps === false) {
			const derivedState = {
				sectionIdCount: props.data.sort((a, b) => (a.id > b.id ? -1 : 1))[0].id + 1,
				sections: props.data.sort((a, b) => (a.pageOrder > b.pageOrder ? 1 : -1)),
			};
			actions.setState(derivedState);
		}
	}, []);

	const [toolbar, setToolbar] = useState(null);
	const [editing, setEditing] = useState(null);

	return (
		<React.Fragment>
			<Grid container id='mui-layout-editor'>
				{state.sections.length > 0 &&
					state.sections.map(section => (
						<Grid
							item
							xs={12}
							id='contentTypeWrapper'
							onMouseOver={() => setToolbar(section.id)}
							onMouseOut={() => setToolbar(null)}
							key={`contentTypeWrapper_${section.id}`}
						>
							<Grid container>
								<Grid item xs={12} key={`ToolbarWrapper_${section.id}`}>
									<Toolbar
										active={toolbar === section.id}
										setEditing={setEditing}
										section={section}
										key={`Toolbar_${section.id}`}
									/>
								</Grid>
								<Grid item xs={12} key={`Grid_${section.id}`}>
									<ContentType
										editing={section.id === editing}
										setEditing={setEditing}
										section={section}
										key={`ContentType_${section.id}`}
									/>
								</Grid>
							</Grid>
						</Grid>
					))}
			</Grid>
			<Selector saveData={saveData}	/>
		</React.Fragment>
	);
});
