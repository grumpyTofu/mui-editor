import React, { useState } from 'react';
import Editor from '../../TextEditor';

export default props => {
	const active = props.active;
	const [html, setHtml] = useState('<div>Add Some Content</div>');
	return (
		<React.Fragment>
			{active ?
				<Editor
					transparent
					data={html}
					output={data => setHtml(data)}
				/>
			:
				<div dangerouslySetInnerHTML={{ __html: html }}></div>
			}
		</React.Fragment>
	);
};
