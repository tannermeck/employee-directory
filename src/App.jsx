import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Auth from './components/Auth/Auth.jsx'
import Header from './components/Header/Header';
import { UserProvider } from './context/UserContext/UserContext';
import ConfirmEmail from './components/Auth/ConfirmEmail';
import Profile from './views/Profile/Profile';
import CreateProfile from './views/Profile/CreateProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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
          <PrivateRoute exact path='/profile'>
            <Profile />
          </PrivateRoute>
          <PrivateRoute exact path='/create-profile'>
            <CreateProfile />
          </PrivateRoute>
          <PrivateRoute exact path='/edit-profile'>
            <CreateProfile newProfile />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserProvider>
  )
}
