import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
      <Route exact path="/register" component={Auth} />
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
