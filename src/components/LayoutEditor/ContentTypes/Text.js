import React, { useState } from 'react';
import Editor from '../../TextEditor';

export default props => {

	const [state, setState] = useState({
		html: '<div>Add Some Content</div>',
		editing: false
	});

	const handleOutput = data => {
		setState({
			...state,
			html: data,
			editing: false
		});
	}

	return (
		<React.Fragment>
			{state.editing ?
				<Editor
					transparent
					modern
					data={state.html}
					output={data => handleOutput(data)}
				/>
			:
				<div
					dangerouslySetInnerHTML={{ __html: state.html }}
					onMouseOver={() => setState({ ...state, editing: true })}
				>
				</div>
			}
		</React.Fragment>
	);
};
