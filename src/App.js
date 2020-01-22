import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Orders from "./containers/Orders/Orders";
import Dishes from "./containers/Dishes/Dishes";
import AddDish from "./containers/AddDish/AddDish";
import EditDish from "./containers/EditDish/EditDish";

function App() {
  return (
    <div className="App">
      <Navigation/>
        <Switch>
          <Route path='/' exact component={Dishes}/>
          <Route path='/orders' exact component={Orders}/>
          <Route path='/add' exact component={AddDish}/>
          <Route path='/edit/:id' component={EditDish}/>
        </Switch>
    </div>
  );
}

export default App;
