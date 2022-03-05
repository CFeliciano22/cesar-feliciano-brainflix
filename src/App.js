import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Main from './components/Main/Main';
import Upload from './components/Upload/Upload';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends React.Component {

  render() {
  return (
   
   <BrowserRouter>
      <Header/>
       <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/upload' exact component={Upload}/>
        <Route path='/video/:id' component={Main}/>
        </Switch>
    </BrowserRouter>
      
  );
  }
}


export default App;
