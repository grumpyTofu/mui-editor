import React from 'react';
import Hero, { defaultImage } from './Hero';
import Button from './Button';
// import Collection from './Collection';
import CollectionItem from './CollectionItem';
// import Dialog from './Dialog';
import Text from './Text';
import Title from './Title';

const contentTypes = {
	Hero: {
		component: <Hero />,
		props: {
			image: defaultImage,
		},
	},
	Title: {
		component: <Title />,
		props: {
			text: 'Title Text',
		},
	},
	Text: {
		component: <Text />,
		props: {
			html: '<div>Add some content here</div>',
		},
	},
	Button: {
		component: <Button />,
		props: {
			text: 'Click Here',
			link: '',
		},
	},
	// collection: <Collection />,
	'Collection Item': {
		component: <CollectionItem />,
		props: {
			primary: 'Sample Content Title',
			secondary: 'Sample content description',
			link: '',
		},
	},
	// dialog: <Dialog />,
};

export default contentTypes;

export const contentTypesList = Object.keys(contentTypes);
