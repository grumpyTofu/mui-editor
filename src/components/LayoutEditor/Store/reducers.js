import { SET_STATE, CREATE_SECTION, DELETE_SECTION } from './actions';

const initialState = {
	checkedProps: false,
	sectionIdCount: 0,
	sections: [],
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case SET_STATE: {
			const newState = action.payload;
			return {
				...newState,
				checkedProps: true,
			};
		}
		case CREATE_SECTION: {
			const { contentType, props } = action.payload;
			return {
				...state,
				sectionIdCount: state.sectionIdCount + 1,
				sections: [
					...state.sections,
					{
						id: state.sectionIdCount,
						contentType: contentType,
						props: props,
						pageOrder: state.sections.length,
					},
				],
			};
		}
		case DELETE_SECTION: {
			const { sections } = action.payload;
			return {
				...state,
				sections: sections,
			};
		}
		default: {
			return state;
		}
	}
};

export { initialState, reducers };
