import React, { useContext } from "react";
import { StoreContext } from "./Store";
import { Link } from "react-router-dom";

const Home = () => {
    const { state, actions } = useContext(StoreContext);
    // const [nick, setNick] = useState('');

    const handleChange = (event) => {
        // dispatch({ type: 'SET_NICK', payload: event.target.value});
        actions.setNick(event.target.value);
    };

    return (
        <section>
            Nick <input onChange={handleChange} />
            <br />
        Nick: {state.nick}
            <br />
            <Link onClick={() => console.log('clicked')} to="/chat">Przejdz dalej</Link>
        </section>
    );
};

export { Home }