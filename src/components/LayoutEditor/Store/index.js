import React, { createContext, useReducer } from 'react';
import { reducers, initialState } from './reducers';
import { useActions } from './actions';
import { applyMiddleware } from './middleware';

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducers, initialState);
	const enhancedDispatch = applyMiddleware(state, dispatch);
	const actions = useActions(state, enhancedDispatch);

	return (
		<StoreContext.Provider value={{ state, enhancedDispatch, actions }}>
			{children}
		</StoreContext.Provider>
	);
};

export { StoreContext, StoreProvider };

const withStore = Component => props => (
	<StoreProvider>
		<Component {...props} />
	</StoreProvider>
);

export default withStore;
