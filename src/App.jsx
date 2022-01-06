import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Auth from './components/Auth/Auth.jsx'
import Header from './components/Header/Header';
import { UserProvider } from './context/UserContext/UserContext';
import ConfirmEmail from './components/Auth/ConfirmEmail';
import Profile from './views/Profile/Profile';

export default function App() {
  return (
    <UserProvider>
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
          <Route exact path='/confirm-email'>
            <ConfirmEmail />
          </Route>
          <Route exact path='/create-profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  )
}
