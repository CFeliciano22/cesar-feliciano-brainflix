import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Upload from './Pages/Upload/Upload';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';



class App extends React.Component {

  render() {
  return (
   
   <BrowserRouter>
      <Header/>
       <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/upload' exact component={Upload}/>
        <Route path='/video/:id' component={HomePage}/>
        </Switch>
    </BrowserRouter>
      
  );
  }
}


export default App;
