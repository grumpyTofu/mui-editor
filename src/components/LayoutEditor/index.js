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
					: config.sections.length > 0
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
			<Grid container ref={editorRef}>
				{state.sections.length > 0 &&
					state.sections.map((section, index) => {
						let styles = {};
						if (section.contentType !== 'Hero') {
							styles = Object.assign(styles, { padding: '0rem 1.5rem' });
							if (index === 0) {
								styles = Object.assign(
									{},
									{ padding: '1.5rem 1.5rem 0rem 1.5rem' }
								);
							} else if (index === state.sections.length - 1) {
								styles = Object.assign(
									{},
									{ padding: '0rem 1.5rem 1.5rem 1.5rem' }
								);
							}
						}
						return (
							<Grid
								item
								{...section.gridSize}
								style={styles}
								key={`contentTypeWrapper_${section.id}`}
							>
								<Section section={section} key={`Section_${section.id}`} />
							</Grid>
						);
					})}
			</Grid>
			<Selector saveData={saveData} />
			<GridEditDialog />
		</React.Fragment>
	);
});

