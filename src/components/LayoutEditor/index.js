import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Selector from './Selector';
import Toolbar from './Toolbar';
import {
	Hero,
	// Collection,
	CollectionItem,
	// Dialog,
	Button,
	// GridItem,
	// Section,
	Text,
	Title,
} from './ContentTypes';

const contentTypes = {
	Hero: {
		component: <Hero />,
		props: {
			image: null,
		},
	},
	Title: {
		component: <Title />,
		props: {
			text: null,
		},
	},
	Text: {
		component: <Text />,
		props: {
			html: null,
		},
	},
	Button: {
		component: <Button />,
		props: {
			text: null,
			link: null,
		},
	},
	// collection: <Collection />,
	'Collection Item': {
		component: <CollectionItem />,
		props: {
			primary: null,
			secondary: null,
			link: null,
		},
	},
	// dialog: <Dialog />,
	// section: <Section />,
	// gridItem: <GridItem />,
};

export default props => {
	const output =
		props.output ||
		function (outputHtml, outputEditorConfig) {
			console.warn('Please set up an output function.', outputHtml, outputEditorConfig);
		};

	const saveData = () => {
		var content = document.getElementById('mui-layout-editor').innerHTML;
		output(content, state.sections);
	};

	const [state, setState] = useState({
		sectionIdCount: 0,
		sections: props.data ? props.data.sort((a, b) => (a.pageOrder > b.pageOrder ? 1 : -1)) : [],
	});

	const createSection = contentType => {
		setState({
			...state,
			sectionIdCount: state.sectionIdCount + 1,
			sections: [
				...state.sections,
				{
					id: state.sectionIdCount,
					contentType: contentType,
					props: contentTypes[contentType].props,
					pageOrder: state.sections.length,
				},
			],
		});
	};

	const updateSection = (id, order) => {
		var newSections = state.sections;
		if (order >= 0 && order < newSections.length) {
			for (var [i, section] of newSections.entries()) {
				if (section.id === id) {
					if (order > i) {
						newSections[i].pageOrder = order;
						newSections[i + 1].pageOrder = newSections[i + 1].pageOrder - 1;
					} else {
						newSections[i].pageOrder = order;
						newSections[i - 1].pageOrder = newSections[i - 1].pageOrder + 1;
					}
				}
			}
			setState({
				...state,
				sections: newSections.sort((a, b) => (a.pageOrder > b.pageOrder ? 1 : -1)),
			});
		}
	};

	const deleteSection = id => {
		var newSections = [];
		for (var [i, section] of state.sections.entries()) {
			if (section.id !== id) {
				newSections.push({ ...section, pageOrder: i > id ? i - 1 : i });
			}
		}
		setState({ ...state, sections: newSections });
	};

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
							key={`contentItemWrapper_${section.id}`}
						>
							<Grid container>
								<Grid item xs={12} key={`ToolbarWrapper_${section.id}`}>
									<Toolbar
										active={toolbar === section.id}
										deleteSection={deleteSection}
										updateSection={updateSection}
										setEditing={setEditing}
										section={section}
										key={`Toolbar_${section.id}`}
									/>
								</Grid>
								<Grid item xs={12} key={`Grid_${section.id}`}>
									{React.cloneElement(
										contentTypes[section.contentType].component,
										{
											key: `${section.contentType}_${section.id}`,
											editing: section.id === editing,
											setEditing: setEditing,
											...contentTypes[section.contentType].props,
										}
									)}
								</Grid>
							</Grid>
						</Grid>
					))}
			</Grid>
			<Selector
				contentTypes={contentTypes}
				createSection={createSection}
				saveData={saveData}
			/>
		</React.Fragment>
	);
};
