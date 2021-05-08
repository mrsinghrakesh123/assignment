import './App.css';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import ListPage from './ListPage';
import FormPage from './FormPage';
import Detail from './Detail';
function App() {
  return (
    <div className="App container">
      <Router>
      <nav className="navbar navbar-default navbar-static-top">
    <ul className="nav nav-pills">
      <li><Link to="/listpage" activeClassName="active">USERLIST</Link></li>
      <li><Link to="/formpage" activeClassName="active">USER PROFILE</Link></li>
    </ul>
  </nav>
  <br />
<Switch>
<Route path="/listpage">
  <ListPage />
</Route>
<Route path="/formpage">
  <FormPage />
</Route>
<Route path="/detail/:id">
  <Detail />
</Route>
</Switch>
</Router>
    </div>
  );
}

export default App;
