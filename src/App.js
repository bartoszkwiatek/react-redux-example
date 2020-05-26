import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StoreProvider } from './Store';
import { Chat } from './Chat';
import { Home } from './Home';

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