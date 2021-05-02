import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import MainNav from './components/MainNav/MainNav';

// import './App.css';

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
            <ProductList />
          </Route>

          <Route exact path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
