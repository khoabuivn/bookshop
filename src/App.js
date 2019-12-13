import React from 'react';
import './App.css';
import TopMenu from './components/TopMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Books from './pages/Books';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/Cart';

import Login from './pages/Login';


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Switch>
            <Route path='/' exact component={Books}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/cart' exact component={Cart}/>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
