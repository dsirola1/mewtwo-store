import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Products from './components/Products';
import Detail from './components/Detail';
import MainNav from './components/MainNav';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/signin">
            <Signin />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/">
            <Products />
          </Route>

          <Route exact path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
