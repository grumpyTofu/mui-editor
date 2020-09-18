import React, { useContext, useEffect, useRef } from 'react';
import withStore, { StoreContext } from './Store';
import Grid from '@material-ui/core/Grid';
import Selector from './Selector';
import Section from './Section';
import GridEditDialog from './GridEditDialog';

export default withStore(({ config, output, ...props }) => {
	const { state, actions } = useContext(StoreContext);

	const _output =
		output ||
		function (outputHtml, outputEditorConfig) {
			console.warn('Please set up an output function.', outputHtml, outputEditorConfig);
		};

	const editorRef = useRef();

	const saveData = () => {
		var content = editorRef.current.innerHTML;
		_output(content, { sectionIdCount: state.sectionIdCount, sections: state.sections });
	};

	useEffect(() => {
		if (config && state.checkedProps === false) {
			const derivedState = {
				sectionIdCount: config.sectionIdCount
					? config.sectionIdCount
					: config.sections && config.sections.length > 0
					? config.sections.sort((a, b) => (a.id > b.id ? -1 : 1))[0].id + 1
					: 0,
				sections:
					config.sections && config.sections.length > 0
						? config.sections.sort((a, b) => (a.pageOrder > b.pageOrder ? 1 : -1))
						: [],
			};
			actions.setState(derivedState);
		}
	}, []);

	return (
		<React.Fragment>
			<div ref={editorRef}>
				<Grid container style={{ padding: '1.5rem' }}>
					{state.sections.length > 0 &&
						state.sections.map((section, index) => (
							<Grid
								item
								{...section.gridSize}
								key={`contentTypeWrapper_${section.id}`}
							>
								<Section section={section} key={`Section_${section.id}`} />
							</Grid>
						))}
				</Grid>
			</div>
			<Selector saveData={saveData} />
			<GridEditDialog />
		</React.Fragment>
	);
});
