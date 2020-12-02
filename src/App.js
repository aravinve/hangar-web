import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
const { default: Homepage } = require("./components/homepage/Homepage");
const { default: Auth } = require("./components/Auth/Auth");

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => (
         <div className="w-screen h-screen overflow-auto">
            <Homepage />
        </div>
      )} />
      <Route exact path="/hangar" component={Auth} />
      <Route exact path="/*" render={() => (
        <Redirect to="/hangar" />
      )} />
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
