import React from 'react';
import Editor from '../../TextEditor';
import EditDialog from '../EditDialog';

export default ({ editing, setEditing, updateSection, section }) => {
	const handleOutput = data => {
		setEditing(false);
		updateSection(section.id, {
			...section,
			props: {
				...section.props,
				html: data,
			},
		});
	};

	return (
		<React.Fragment>
			<div
				dangerouslySetInnerHTML={{ __html: section.props.html }}
				style={{ textAlign: 'left', margin: '1.5rem' }}
			/>
			{editing && (
				<EditDialog editing={editing} setEditing={setEditing} title='Update Content'>
					<Editor
						transparent
						data={section.props.html}
						output={data => handleOutput(data)}
					/>
				</EditDialog>
			)}
		</React.Fragment>
	);
};
