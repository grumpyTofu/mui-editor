import React, { useState } from 'react';
import {
	DialogContentText,
	TextField,
	RadioGroup,
	FormControlLabel,
	Radio,
} from '@material-ui/core';
import { image } from './defaultImage';
import EditDialog from '../../EditDialog';

export default ({ editing, setEditing, _image }) => {
	const [src, setSrc] = useState(_image || image);

	const [imageType, setImageType] = useState('link');

	const handleImageUpload = event => {
		const file = event.target.files[0];
		// eslint-disable-next-line no-undef
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			setSrc(reader.result);
		};
		reader.onerror = function (error) {
			console.log('Error: ', error);
		};
	};

	return (
		<React.Fragment>
			<img
				src={src}
				width='100%'
				height='auto'
				style={{ maxHeight: '100%', marginBottom: '1.5rem' }}
			/>
			<EditDialog editing={editing} setEditing={setEditing} title='Edit Image'>
				<DialogContentText>
					Upload an image or update the image address for the image
				</DialogContentText>
				<RadioGroup
					row
					aria-label='image type'
					name='image type'
					value={imageType}
					onChange={event => setImageType(event.target.value)}
				>
					<FormControlLabel
						value='link'
						control={<Radio color='primary' />}
						label='Image Address'
						labelPlacement='top'
					/>
					<FormControlLabel
						value='file'
						control={<Radio color='primary' />}
						label='File Upload'
						labelPlacement='top'
					/>
				</RadioGroup>
				{imageType === 'link' && (
					<TextField
						autoFocus
						margin='dense'
						label='Image source link'
						defaultValue=''
						fullWidth
						onChange={event => setSrc(event.target.value)}
					/>
				)}
				{imageType === 'file' && (
					<input
						type='file'
						id='avatar'
						name='avatar'
						accept='image/png, image/jpeg'
						onChange={handleImageUpload}
					/>
				)}
			</EditDialog>
		</React.Fragment>
	);
};
