import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Detail from '../routers/Detail';
import Home from '../routers/Home';

function App() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/:id" exact component={Detail} />
        </Router>
    )
}

export default App
