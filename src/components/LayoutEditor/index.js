import React, { useContext, useEffect } from 'react';
import withStore, { StoreContext } from './Store';
import Grid from '@material-ui/core/Grid';
import Selector from './Selector';
import Section from './Section';

export default withStore(({ data, sectionIdCount, output, ...props }) => {
	const { state, actions } = useContext(StoreContext);

	const _output =
		output ||
		function (outputHtml, outputEditorConfig) {
			console.warn('Please set up an output function.', outputHtml, outputEditorConfig);
		};

	const saveData = () => {
		var content = document.getElementById('mui-layout-editor').innerHTML;
		_output(content, state.sections);
	};

	useEffect(() => {
		if (data && state.checkedProps === false) {
			const derivedState = {
				sectionIdCount: sectionIdCount
					? sectionIdCount + 1
					: data.length > 0
					? data.sort((a, b) => (a.id > b.id ? -1 : 1))[0].id + 1
					: 0,
				sections:
					data && data.length > 0
						? data.sort((a, b) => (a.pageOrder > b.pageOrder ? 1 : -1))
						: [],
			};
			actions.setState(derivedState);
		}
	}, []);

	return (
		<React.Fragment>
			<Grid container id='mui-layout-editor'>
				{state.sections.length > 0 &&
					state.sections.map(section => (
						<Grid
							item
							xs={12}
							id='contentTypeWrapper'
							key={`contentTypeWrapper_${section.id}`}
						>
							<Section section={section} key={`Section_${section.id}`} />
						</Grid>
					))}
			</Grid>
			<Selector saveData={saveData} />
		</React.Fragment>
	);
});
