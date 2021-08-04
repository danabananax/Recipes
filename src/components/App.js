import Auth from './auth/Auth'
import Home from "./Home";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";



const App = () => {
    const authvals = useAuth();

    return (
        <BrowserRouter>
          <AuthProvider>
            {!authvals?.currentUser ? <Redirect to="/auth/signup"/> : <Home/>}
            <Switch>
              <Route path="/auth">
                  <Auth/>
              </Route>
              <Route path="/home">
                  <Home/>
              </Route>
            </Switch>
          </AuthProvider>
        </BrowserRouter>
    )
}

export default App;
