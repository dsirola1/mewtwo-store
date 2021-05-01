import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Products from './components/Products/Products';
import Detail from './components/Detail/Detail';
import MainNav from './components/MainNav/MainNav';

// import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<MainNav />
				<Switch>
					<Route exact path='/signin'>
						<Signin />
					</Route>

					<Route exact path='/signup'>
						<Signup />
					</Route>

					<Route exact path='/'>
						<Products />
					</Route>

					<Route exact path='/products/:id'>
						<Detail />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
