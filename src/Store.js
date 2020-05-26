import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import { useActions } from './useActions';

const initialState = {
    nick: ''
};

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const actions = useActions(state, dispatch);

    return (
        <StoreContext.Provider value={{ state, dispatch, actions }}>
            {children}
        </StoreContext.Provider>
    )
}

export { initialState, StoreContext, StoreProvider }