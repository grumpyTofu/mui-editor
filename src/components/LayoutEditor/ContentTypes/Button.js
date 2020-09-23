import React from 'react';
import {
	Button,
	DialogContentText,
	TextField,
	RadioGroup,
	FormControlLabel,
	Radio,
	FormHelperText,
} from '@material-ui/core';
import EditDialog from '../EditDialog';

export default ({ editing, setEditing, updateSection, section }) => {
	const linkProps =
		section.props.type === 'external'
			? {
					className: 'mui-editor-external-link',
					target: '_blank',
					rel: 'noreferrer noopener',
			  }
			: {
					className: 'mui-editor-internal-link',
			  };

	return (
		<div
			style={{
				height: 'auto',
				width: 'auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '1rem 0rem',
			}}
		>
			<Button
				color='primary'
				size='small'
				variant='outlined'
				component='a'
				href={section.props.link}
				{...linkProps}
			>
				{section.props.text}
			</Button>
			<EditDialog editing={editing} setEditing={setEditing} title='Update Button'>
				<DialogContentText>
					Enter display text and a link for the button below.
				</DialogContentText>
				<TextField
					autoFocus
					margin='dense'
					label='Button Text'
					value={section.props.text}
					fullWidth
					onChange={event =>
						updateSection(section.id, {
							...section,
							props: {
								...section.props,
								text: event.target.value,
							},
						})
					}
				/>
				<RadioGroup
					row
					aria-label='link type'
					name='link type'
					value={section.props.type}
					onChange={event =>
						updateSection(section.id, {
							...section,
							props: {
								...section.props,
								type: event.target.value,
							},
						})
					}
				>
					<FormControlLabel
						value='external'
						control={<Radio color='primary' />}
						label='External Link'
						labelPlacement='top'
					/>
					<FormControlLabel
						value='internal'
						control={<Radio color='primary' />}
						label='Internal Link'
						labelPlacement='top'
					/>
				</RadioGroup>
				<TextField
					autoFocus
					margin='dense'
					label='Link'
					fullWidth
					value={section.props.link}
					onChange={event =>
						updateSection(section.id, {
							...section,
							props: {
								...section.props,
								link: event.target.value,
							},
						})
					}
				/>
				<FormHelperText>
					{section.props.type === 'external'
						? 'This field should contain an absolute url. ex: https://google.com'
						: 'This field should contain a relative url. ex: test/url'}
				</FormHelperText>
			</EditDialog>
		</div>
	);
};
