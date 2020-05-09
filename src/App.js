import React, { useState, createContext, useContext, useReducer } from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const initialState = {
  nick: ''
};

const reducer = (state, action) => {  //action : {type:string, payload: any}
  switch (action.type) {
    case 'SET_NICK':
      return { ...state, nick: action.payload };

    default: return { ...state };
  }
};

// customowy hook
const useActions = (state, dispatch) => {
  return {
    setNick: (nick) => dispatch({ type: 'SET_NICK', payload: nick }),
  }
}

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

const Chat = () => {
  const { state, actions } = useContext(StoreContext);

  return <section>Nick:{state.nick}</section>;
};


const App = () => {
  return (<>
    <StoreProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
      </Router>
    </StoreProvider>
  </>
  )
}
export default App;