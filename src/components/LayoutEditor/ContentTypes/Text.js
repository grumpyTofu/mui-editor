import React, { useState } from 'react';
import Editor from '../../TextEditor';
import EditDialog from '../EditDialog';

export default props => {

	const { editing, setEditing } = props;

	const [html, setHtml] = useState('<div>Add Some Content</div>');

	const handleOutput = data => {
		setEditing(false);
		setHtml(data);
	};

	return (
		<React.Fragment>
			<div
				dangerouslySetInnerHTML={{ __html: html }}
				style={{ textAlign: 'left' }}
			/>
			{editing &&
				<EditDialog
					editing={editing}
					setEditing={setEditing}
					title='Update Content'
				>
					<Editor
						transparent
						data={html}
						output={data => handleOutput(data)}
					/>
				</EditDialog>
			}
		</React.Fragment>
	);
};
