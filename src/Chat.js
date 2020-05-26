import React, { useContext } from "react";
import { StoreContext } from "./Store";

const Chat = () => {
    const { state, actions } = useContext(StoreContext);

    const handleClear = () => {
        actions.clearNick();
        //   dispatch({ type: 'CLEAR_NICK' });
    };

    return (
        <div>
            <section>Twoj nick: {state.nick}</section>
            <button onClick={handleClear}>wyczysc</button>
        </div>
    );
};

export { Chat }