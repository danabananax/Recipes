import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Auth from './auth/Auth';
import Dashboard from './Dashboard';
import {
  AuthProvider,
  useAuth,
} from '../contexts/AuthContext';

const App = () => {
  const auth = useAuth();

  return (
    <AuthProvider>
      <BrowserRouter>
        {auth?.currentUser ? <Dashboard /> : <Redirect to="/auth/signup" />}
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/home">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
