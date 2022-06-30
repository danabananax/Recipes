import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import Auth from './auth/Auth';
import customTheme from './theme';
import Dashboard from './Dashboard/Dashboard';
import AddRecipeParent from './AddRecipe/AddRecipeParent';
import ViewRecipeParent from './ViewRecipe/ViewRecipeParent';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {

  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null); 
      }
    })
  , []);

  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        {currentUser ? <Redirect to="/home" /> : <Redirect to={{ pathname: "/auth/login" }}/>}
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/home">
            <Dashboard currentUser={currentUser}/>
          </Route>
          <Route path="/add-recipe">
            <AddRecipeParent userId={currentUser?.uid}/>
          </Route>
          <Route path="/view-recipe/:id">
            <ViewRecipeParent />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
