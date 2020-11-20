import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { MainPage } from './pages/Main';
import { NewsPage } from './pages/News';

const  App = () => {
  
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route  path='/news' component={NewsPage} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;

