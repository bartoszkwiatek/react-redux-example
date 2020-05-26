// definicja customowego hook'a
const useActions = (state, dispatch) => {
    return {
        setNick: (nick) => dispatch({ type: 'SET_NICK', payload: nick }),
        clearNick: () => dispatch({ type: 'CLEAR_NICK' }),
    };
};

export { useActions }