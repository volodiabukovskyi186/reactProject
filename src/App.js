import React from 'react';

import './App.css';
import{BrowserRouter,Route,link} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main'
import Detail from './pages/Detail/Detail';
import SingUp from './pages/SingUp/SingUp';
import PrivateRoute from './PrivateRoute'
import SingIn from './pages/SingIn/SingIn';


function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Route path='/' exact component={Main}></Route>
        <PrivateRoute path='/detail'   component={Detail}></PrivateRoute>
        <Route path='/singUp' render={()=><SingUp></SingUp>}></Route>
        <Route path='/singIn' render={()=><SingIn></SingIn>}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
