/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Toolbar, { getHandlers } from './Toolbar';

const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: getHandlers(),
    },
    clipboard: {
        matchVisual: false,
    }
};

export default props => {
  const [editorHtml, setEditorHtml] = useState("");
	const handleChange = html => setEditorHtml(html);
	const saveData = () => {
		var doc = new DOMParser().parseFromString(editorHtml, "text/html");
		for (var element of ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'ul', 'li']) {
			var nodeList = doc.querySelectorAll(element);
			if (nodeList.length > 0) {
				for (var node of nodeList) {
					if (node.classList.length > 0) {
						for (var className of node.classList) {
							if (className.indexOf('ql-indent') > -1) {
								const pad = parseInt(className.split('-').pop());
								console.log(pad);
								if (element === 'li' && node.parentNode.nodeName === 'OL') {
									console.log(node.style);
								}
								node.style.paddingLeft = `${pad*3}em`;
							}
							if (className.indexOf('ql-align') > -1) {
								node.style.textAlign = className.split('-').pop();
							}
						}
					}
					node.classList.remove(...node.classList);
					const classes = element === 'ul' ? ['MuiList-root', 'MuiList-padding']
					: element === 'li' ? [
							'MuiListItem-root', 'MuiListItem-gutters', 'MuiTypography-root', 'MuiListItemText-primary', 'MuiTypography-body1', 'MuiTypography-displayBlock', 'MuiListItemText-root'
					] : [
						'MuiTypography-root',
						`MuiTypography-${element === 'blockquote' ? 'p' : element}`,
						'MuiTypography-gutterBottom'
					];
					node.classList.add(...classes);
				}
			}
		}
		const html = doc.body.innerHTML;
		props.output(html);
	};

	return(
			<div className="text-editor">
					<Toolbar saveData={saveData} />
					<ReactQuill
							onChange={handleChange}
							modules={modules}
							// formats={formats}
							theme="snow" // pass false to use minimal theme
					/>
			</div>
	);
}
