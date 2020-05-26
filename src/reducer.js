// definiuje reducer
const reducer = (state, action) => {
    // action : {type: string, payload: any}
    switch (action.type) {
        case 'SET_NICK':
            return { ...state, nick: action.payload };

        case 'CLEAR_NICK':
            return { ...state, nick: '' };

        default:
            return { ...state };
    }
};

export { reducer }