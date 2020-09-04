import React, { useContext } from 'react';
import contentTypes from './ContentTypes';
import { StoreContext } from './Store';

export default ({ section, editing, setEditing }) => {
	const { actions } = useContext(StoreContext);
	return (
		<React.Fragment>
			{React.cloneElement(contentTypes[section.contentType].component, {
				editing: editing,
				setEditing: setEditing,
				updateSection: actions.updateSection,
				section: section,
			})}
		</React.Fragment>
	);
};
