import React from 'react';
import './App.css';
import TopMenu from './components/TopMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Books from './pages/Books';
import Cart from './pages/Cart';
import { CartProvider } from './contexts/Cart';

const Home = () => <span>Home</span>


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/books' exact component={Books}/>
            <Route path='/cart' exact component={Cart}/>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
