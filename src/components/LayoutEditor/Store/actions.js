export const SET_STATE = 'SET_STATE';
export const CREATE_SECTION = 'CREATE_SECTION';
export const UPDATE_SECTION = 'UPDATE_SECTION';
export const UPDATE_SECTION_ORDER = 'UPDATE_SECTION_ORDER';
export const DELETE_SECTION = 'DELETE_SECTION';

export const OPEN_GRID_EDIT = 'OPEN_GRID_EDIT';
export const CLOSE_GRID_EDIT = 'CLOSE_GRID_EDIT';
export const UPDATE_GRID_EDIT = 'UPDATE_GRID_EDIT';

export const useActions = (state, dispatch) => ({
	setState: data => dispatch({ type: SET_STATE, payload: data }),
	createSection: data => dispatch({ type: CREATE_SECTION, payload: data }),
	updateSectionOrder: (id, order) =>
		dispatch({
			type: UPDATE_SECTION_ORDER,
			payload: {
				id: id,
				order: order,
			},
		}),
	updateSection: (id, section) =>
		dispatch({
			type: UPDATE_SECTION,
			payload: {
				id: id,
				section: section,
			},
		}),
	deleteSection: id => dispatch({ type: DELETE_SECTION, payload: { id: id } }),
	openGridEdit: section => dispatch({ type: OPEN_GRID_EDIT, payload: section }),
	closeGridEdit: () => dispatch({ type: CLOSE_GRID_EDIT }),
	updateGridEdit: gridEdit => dispatch({ type: UPDATE_GRID_EDIT, payload: gridEdit }),
});
