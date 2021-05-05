import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import MainNav from './components/MainNav/MainNav';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <MainNav />
      <Switch>
        <Route exact path='/signin'>
          <Signin />
        </Route>

        <Route exact path='/signup'>
          <Signup />
        </Route>

        <PrivateRoute exact path='/'>
          <ProductList />
        </PrivateRoute>

        <Route exact path='/products/:id'>
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
