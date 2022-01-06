import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Auth from './components/Auth/Auth.jsx'
import Header from './components/Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Auth />
        </Route>
        <Route exact path='/register'>
          <Auth newUser />
        </Route>
      </Switch>
    </Router>
  )
}
