/* eslint-disable no-redeclare */
import { SET_STATE, UPDATE_SECTION, UPDATE_SECTION_ORDER, DELETE_SECTION } from './actions';

export const applyMiddleware = (state, dispatch) => action => {
	if (action.type === UPDATE_SECTION) {
		const { id, section } = action.payload;
		var newSections = state.sections;
		for (var [i, _section] of newSections.entries()) {
			if (_section.id === id) {
				newSections[i] = section;
			}
		}
		dispatch({
			type: SET_STATE,
			payload: {
				...state,
				sections: newSections,
			},
		});
	} else if (action.type === UPDATE_SECTION_ORDER) {
		const { id, order } = action.payload;
		var newSections = state.sections;
		if (order >= 0 && order < newSections.length) {
			for (var [i, section] of newSections.entries()) {
				if (section.id === id) {
					if (order > i) {
						newSections[i].pageOrder = order;
						newSections[i + 1].pageOrder = newSections[i + 1].pageOrder - 1;
					} else {
						newSections[i].pageOrder = order;
						newSections[i - 1].pageOrder = newSections[i - 1].pageOrder + 1;
					}
				}
			}
			dispatch({
				type: SET_STATE,
				payload: {
					...state,
					sections: newSections.sort((a, b) => (a.pageOrder > b.pageOrder ? 1 : -1)),
				},
			});
		}
	} else if (action.type === DELETE_SECTION) {
		const { id } = action.payload;
		var newSections = [];
		for (var [i, section] of state.sections.entries()) {
			if (section.id !== id) {
				newSections.push({ ...section, pageOrder: i > id ? i - 1 : i });
			}
		}
		dispatch({ type: DELETE_SECTION, payload: { sections: newSections } });
	} else {
		dispatch(action);
	}
};
