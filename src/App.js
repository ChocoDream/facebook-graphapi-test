import React, {useState} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Events from './pages/Events';
import NewPage from './pages/NewPage';

const App = () => {
  const [userData, setUseData] = useState({});

  return (
    <div className="App">
      <Router>
        <Navbar />

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/new-event" component={Events} />
          <Route exact path="/schedule-new-page" component={NewPage} />
        </main>
      </Router>
    </div>
  );
}

export default App;
