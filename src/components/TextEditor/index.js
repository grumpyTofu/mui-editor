/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Toolbar from './Toolbar';
// { getHandlers } from './Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const modules = {
    toolbar: {
        container: "#toolbar",
        // handlers: getHandlers(),
    },
    clipboard: {
        matchVisual: false,
    }
};

const useStyles = makeStyles({
	editorContainer: {
			backgroundColor: 'white',
			'& .ql-editor p, .ql-editor ol, .ql-editor ul, .ql-editor pre, .ql-editor blockquote, .ql-editor h1, .ql-editor h2, .ql-editor h3, .ql-editor h4, .ql-editor h5, .ql-editor h6, .ql-editor blockquote': {
					margin: 0,
					marginBottom: '0.35em',
					fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
			},
			'& .ql-editor h1': {
					fontSize: '6rem',
					fontWeight: 300,
					lineHeight: 1.167,
					letterSpacing: '-0.01562em',
			},
			'& .ql-editor h2': {
					fontSize: '3.75rem',
					fontWeight: 300,
					lineHeight: 1.2,
					letterSpacing: '-0.00833em',
			},
			'& .ql-editor h3': {
					fontSize: '3rem',
					fontWeight: 400,
					lineHeight: 1.167,
					letterSpacing: '0em',
			},
			'& .ql-editor h4': {
					fontSize: '2.125rem',
					fontWeight: 400,
					lineHeight: 1.235,
					letterSpacing: '0.00735em',
			},
			'& .ql-editor h5': {
					fontSize: '1.5rem',
					fontWeight: 400,
					lineHeight: 1.334,
					letterSpacing: '0em',
			},
			'& .ql-editor h6': {
					fontSize: '1.25rem',
					fontWeight: 500,
					lineHeight: 1.6,
					letterSpacing: '0.0075em',
			},
			'& .ql-editor p': {
					fontSize: '1rem',
					fontWeight: 400,
					lineHeight: 1.5,
					letterSpacing: '0.00938em',
			},
			'& .ql-editor blockquote': {
					fontSize: '1rem',
					fontWeight: 400,
					lineHeight: 1.5,
					letterSpacing: '0.00938em',
			},
			'& .ql-editor ul': {
					paddingTop: '8px',
					paddingBottom: '8px',
					margin: 0,
					padding: 0,
					position: 'relative',
					listStyle: 'none'
			},
			'& .ql-editor li': {
					flex: '1 1 auto',
					minWidth: 0,
					marginTop: '4px',
					marginBottom: '4px',
					paddingRight: '16px',
					width: '100%',
					display: 'flex',
					position: 'relative',
					boxSizing: 'border-box',
					textAlign: 'left',
					alignItems: 'center',
					paddingTop: '8px',
					paddingBottom: '8px',
					justifyContent: 'flex-start',
					textDecoration: 'none',
					fontSize: '1rem',
					fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
					fontWeight: 400,
					lineHeight: 1.5,
					letterSpacing: '0.00938em',
					margin: 0
			},
			'& .ql-editor ul > li::before': {
				content: 'none'
			},
			'& ol': {
				counterReset: 'section',
				listStyleType: 'none'
			},
			'& li::before': {
				counterIncrement: 'section',
				content: 'counter(section, ".")'
			}
	},
});

export default props => {
	const classes = useStyles();

	const modern = props.modern || false;

	const condStyles = props.transparent === true ? {
			background: 'transparent'
	} : {};

	const [editorHtml, setEditorHtml] = useState(props.data);

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

	const editorProps = modern ? { onBlur: () => {
		saveData();
	} } : {};
	const toolbarProps = modern ? { modern: modern } : { saveData: saveData() }

	return(
		<div className={classes.editorContainer} style={condStyles}>
			<div className="text-editor">
					<Toolbar { ...toolbarProps } />
					<ReactQuill
							onChange={handleChange}
							modules={modules}
							// formats={formats}
							theme="snow" // pass false to use minimal theme
							value={editorHtml}
							{ ...editorProps }
					/>
			</div>
		</div>
	);
}
