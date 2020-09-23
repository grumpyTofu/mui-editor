import React, { useContext, useEffect, useRef } from 'react';
import withStore, { StoreContext } from './Store';
import Grid from '@material-ui/core/Grid';
import Selector from './Selector';
import Section from './Section';
import GridEditDialog from './GridEditDialog';

const MuiEditor = React.forwardRef((props, ref) => {
	const { state, actions } = useContext(StoreContext);

	const _output =
		props.output ||
		function (outputHtml, outputEditorConfig) {
			console.warn('Please set up an output function.', outputHtml, outputEditorConfig);
		};

	const editorRef = useRef();

	const saveData = () => {
		var content = editorRef.current.innerHTML;
		_output(content, { sectionIdCount: state.sectionIdCount, sections: state.sections });
	};

	useEffect(() => {
		if (props.config && state.checkedProps === false) {
			const derivedState = {
				sectionIdCount: props.config.sectionIdCount
					? props.config.sectionIdCount
					: props.config.sections && props.config.sections.length > 0
					? props.config.sections.sort((a, b) => (a.id > b.id ? -1 : 1))[0].id + 1
					: 0,
				sections:
					props.config.sections && props.config.sections.length > 0
						? props.config.sections.sort((a, b) => (a.pageOrder > b.pageOrder ? 1 : -1))
						: [],
			};
			actions.setState(derivedState);
		}
	}, []);

	return (
		<React.Fragment>
			<div ref={editorRef}>
				<Grid container ref={ref}>
					{state.sections.length > 0 &&
						state.sections.map((section, index) => {
							var styles = { margin: '.5rem 1.5rem' };
							if (section.contentType === 'Hero') {
								styles = { marginBottom: '1.5rem' };
							} else if (section.pageOrder === 0) {
								styles = { margin: '1.5rem 1.5rem 0rem 1.5rem' };
							} else if (section.pageOrder === state.sections.length - 1) {
								styles = { margin: '0rem 1.5rem 1.5rem 1.5rem' };
							}
							return (
								<Grid
									item
									{...section.gridSize}
									key={`contentTypeWrapper_${section.id}`}
									style={styles}
								>
									<Section section={section} key={`Section_${section.id}`} />
								</Grid>
							);
						})}
				</Grid>
			</div>
			<Selector saveData={saveData} />
			<GridEditDialog />
		</React.Fragment>
	);
});

const ConnectedMuiEditor = withStore(MuiEditor);

export default React.forwardRef((props, ref) => <ConnectedMuiEditor {...props} ref={ref} />);
