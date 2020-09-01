export const SET_STATE = 'SET_STATE';
export const CREATE_SECTION = 'CREATE_SECTION';
export const UPDATE_SECTION = 'UPDATE_SECTION';
export const UPDATE_SECTION_ORDER = 'UPDATE_SECTION_ORDER';
export const DELETE_SECTION = 'DELETE_SECTION';

export const useActions = (state, dispatch) => ({
	setState: data => dispatch({ type: SET_STATE, payload: data }),
	createSection: data => dispatch({ type: CREATE_SECTION, payload: data }),
	updateSectionOrder: (_id, _order) => dispatch({
		type: UPDATE_SECTION_ORDER,
		payload: {
			id: _id,
			order: _order,
		}
	}),
	updateSection: (_id, _section) => dispatch({
		type: UPDATE_SECTION,
		payload: {
			id: _id,
			section: _section,
		}
	}),
	deleteSection: _id => dispatch({ type: DELETE_SECTION, payload: { id: _id }}),
});
