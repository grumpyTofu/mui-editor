/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './styles.module.css';
import MuiEditor from './components/MuiEditor';
import { makeStyles } from '@material-ui/core/styles';

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


const Editor = props => {
    const classes = useStyles();

		const transparent = props.transparent || false;

		const condStyles = transparent === true ? {
				background: 'transparent'
		} : {};

		const output = props.output || function(data) {
			console.warn('Please set up an output function to save user content', data);
		};

		const data = props.data || "";

    return (
				<div className={classes.editorContainer} style={condStyles}>
            <MuiEditor output={output} data={data} />
        </div>
    );
}

export default Editor;
