import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Selector from './Selector';
import Toolbar from './Toolbar';
import {
	Hero,
	Collection,
	CollectionItem,
	Dialog,
	Button,
	GridItem,
	Section,
	Text,
	Title,
} from './ContentTypes';

const contentTypes = {
	hero: <Hero />,
	title: <Title />,
	text: <Text />,
	button: <Button />,
	collection: <Collection />,
	collectionItem: <CollectionItem />,
	dialog: <Dialog />,
	section: <Section />,
	gridItem: <GridItem />,
};

export default props => {
	const [state, setState] = useState({
		sectionIdCount: 0,
		sections: [],
	});

	const createSection = contentType => {
		setState({
			...state,
			sectionIdCount: state.sectionIdCount + 1,
			sections: [
				...state.sections,
				{
					id: state.sectionIdCount,
					type: contentType,
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
						newSections[i + 1].pageOrder =
							newSections[i + 1].pageOrder - 1;
					} else {
						newSections[i].pageOrder = order;
						newSections[i - 1].pageOrder =
							newSections[i - 1].pageOrder + 1;
					}
				}
			}
			setState({
				...state,
				sections: newSections.sort((a, b) =>
					a.pageOrder > b.pageOrder ? 1 : -1
				),
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

	return (
		<React.Fragment>
			<Grid container id='editor'>
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
								<Grid
									item
									xs={toolbar === section.id ? 11 : 12}
									key={`Grid_${section.id}`}
								>
									{React.cloneElement(
										contentTypes[section.type],
										{
											key: `${section.type}_${section.id}`,
											active: section.id === toolbar,
										}
									)}
								</Grid>
								<Grid
									item
									xs={1}
									key={`ToolbarWrapper_${section.id}`}
								>
									<Toolbar
										active={toolbar === section.id}
										deleteSection={deleteSection}
										updateSection={updateSection}
										section={section}
										key={`Toolbar_${section.id}`}
									/>
								</Grid>
							</Grid>
						</Grid>
					))}
			</Grid>
			<Selector
				contentTypes={contentTypes}
				createSection={createSection}
			/>
		</React.Fragment>
	);
};
