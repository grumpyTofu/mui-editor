import React, { useState } from 'react';
import Editor from '../../TextEditor';

export default props => {
	const [html, setHtml] = useState('<div>Add Some Content</div>');

	const handleOutput = data => {
		props.setEditing(null);
		setHtml(data);
	};

	return (
		<React.Fragment>
			{props.editing ? (
				<Editor
					transparent
					modern
					data={html}
					output={data => handleOutput(data)}
				/>
			) : (
				<div
					dangerouslySetInnerHTML={{ __html: html }}
					style={{ textAlign: 'left' }}
				/>
			)}
		</React.Fragment>
	);
};
