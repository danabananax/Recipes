import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import Auth from './auth/Auth';
import {
  AuthProvider,
  useAuth,
} from '../contexts/AuthContext';
import customTheme from './theme';
import Dashboard from './Dashboard/Dashboard';
import AddRecipeParent from './AddRecipe/AddRecipeParent';

const App = () => {
  const auth = useAuth();

  return (
    <AuthProvider>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          {auth?.currentUser ? <Dashboard /> : <Redirect to="/auth/login" />}
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/home">
              <Dashboard />
            </Route>
            <Route path="/add-recipe">
              <AddRecipeParent />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
