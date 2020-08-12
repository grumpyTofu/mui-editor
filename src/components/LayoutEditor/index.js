import React, { useState } from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel, Button as MuiButton } from '@material-ui/core';
import Selector from './Selector';
import Toolbar from './Toolbar';
import {
	Hero, Collection, CollectionItem, Dialog, Button,
	GridItem, Section, Text, Title
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
	gridItem: <GridItem />
};

export default props => {

	const [state, setState] = useState({
		sectionIdCount: 0,
		sections: []
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
					pageOrder: state.sections.length
				}
			]
		});
	}

	const updateSection = (id, order) => {
		setState({
			...state,
			sections: state.sections.map((section, index) => section.id === id ? {
				...section,
				pageOrder: order
			} : section.pageOrder >= order ? {
				...section,
				pageOrder: section.pageOrder + 1
			} : section)
		})
	}

	const deleteSection = id => {
		var newSections = [];
		for (var [i, section] of state.sections.entries()) {
			if (section.id !== id) {
				newSections.push({ ...section, pageOrder: i > id ? i - 1 : i });
			}
		}
		setState({ ...state, sections: newSections });
	}

	const [toolbar, setToolbar] = useState(null);

	return (
		<React.Fragment>
			<Grid container id='editor'>
				{state.sections.length > 0 && state.sections.map(section =>
					<Grid item xs={12}
						id='contentTypeWrapper'
						onMouseOver={() => setToolbar(section.id)}
						onMouseOut={() => setToolbar(null)}
						style={{ width: 'inherit', height: 'inherit' }}
						key={`contentItemWrapper_${section.id}`}
					>
						<Grid container>
							<Grid item
								xs={toolbar === section.id ? 11 : 12}
								key={`Grid_${section.id}`}>
								{React.cloneElement(contentTypes[section.type], {
									key: `${section.type}_${section.id}`
								})}
							</Grid>
							<Grid item xs={1} key={`ToolbarWrapper_${section.id}`}>
								<Toolbar
									active={toolbar === section.id ? true : false}
									deleteSection={deleteSection}
									updateSection={updateSection}
									section={section}
									key={`Toolbar_${section.id}`}
								/>
							</Grid>
						</Grid>

					</Grid>
				)}
			</Grid>
			<Selector contentTypes={contentTypes} createSection={createSection} />
		</React.Fragment>
	);
}
