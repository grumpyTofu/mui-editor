/* eslint-disable prettier/prettier */
import React from 'react';
import TextEditor from './components/TextEditor';
import MuiEditor from './components/LayoutEditor';

const MuiTextEditor = props => {
		const transparent = props.transparent || false;
		const output = props.output || function(data) {
			console.warn('Please set up an output function to save user content', data);
		};
		const data = props.data || "";
    return (
			<TextEditor output={output} data={data} transparent={transparent}/>
    );
}

export { MuiTextEditor };

export default MuiEditor;
