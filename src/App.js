import './App.css';
import Scenary from './components/Scenary/Scenary';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/facebook.com" render={() => (window.location = 'https://facebook.com')} />
          <Route path="/pinterest.com" render={() => (window.location = 'https://pinterest.com')} />
          <Route path="/instagram.com" render={() => (window.location = 'https://instagram.com')} />
          <Route path="/">
            <Scenary />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
