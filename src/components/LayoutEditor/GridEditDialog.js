import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from './Store';
import { Grid, TextField, FormHelperText } from '@material-ui/core';
import EditDialog from './EditDialog';

const GridEditDialog = () => {
	const { state, actions } = useContext(StoreContext);
	const { open, section, errors } = state.toolbar.gridEdit;

	const [errorExists, setErrorExists] = useState(false);

	useEffect(() => {
		if (errors && Object.keys(errors).length > 0) {
			let error = false;
			for (const [i, key] of Object.keys(errors).entries()) {
				error = key.error;
				if (error && errorExists === false) {
					setErrorExists(true);
				} else if (
					i === Object.keys(errors).length - 1 &&
					errorExists === true &&
					error === false
				) {
					setErrorExists(false);
				}
			}
		} else if (errorExists === true) {
			setErrorExists(false);
		}
	}, [errors]);

	const saveAndClose = () => {
		actions.updateSection(section.id, section);
		actions.closeGridEdit();
	};

	return (
		<EditDialog
			editing={open}
			setEditing={errorExists ? () => null : saveAndClose}
			title='Edit Grid Size'
			size='sm'
		>
			{open && (
				<Grid container justify='center' spacing={2}>
					{Object.keys(section.gridSize).map(key => (
						<Grid item xs={4} key={`GridItem_${key}`}>
							<TextField
								fullWidth
								type='number'
								label={key}
								value={section.gridSize[key]}
								key={`TextField_${key}`}
								onChange={event => {
									actions.updateGridEdit({
										...state.toolbar.gridEdit,
										section: {
											...section,
											gridSize: {
												...section.gridSize,
												[key]: parseInt(event.target.value),
											},
										},
										errors: {
											...section.errors,
											[key]: {
												error:
													event.target.value > 12 ||
													event.target.value < 1,
												errorMessage:
													event.target.value > 12 ||
													event.target.value < 1
														? 'The value of this field must be between 1 - 12.'
														: '',
											},
										},
									});
								}}
							/>
							{Object.keys(errors).includes(key) && errors[key].error && (
								<FormHelperText error={errors[key].error}>
									{errors[key].errorMessage}
								</FormHelperText>
							)}
						</Grid>
					))}
				</Grid>
			)}
		</EditDialog>
	);
};

export default GridEditDialog;
