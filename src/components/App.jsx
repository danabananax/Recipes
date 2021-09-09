import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Auth from './auth/Auth';
import Dashboard from './Dashboard';
import {
  AuthProvider,
  useAuth,
} from '../contexts/AuthContext';
import theme from './theme';

const App = () => {
  const auth = useAuth();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
