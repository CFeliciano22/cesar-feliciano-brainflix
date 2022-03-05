import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
// import Vids from './data/video-details.json';
import Main from './components/Main/Main';
import Upload from './components/Upload/Upload';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends React.Component {
//   state = {
//     Vids: Vids,
//     currentVideo: Vids[0]
//   }
// changeVideo = (id) => {
//   const newVideoId = this.state.Vids.findIndex(video => id === video.id)
//   this.setState({
//     currentVideo:this.state.Vids[newVideoId]
//   })
// }


  render() {
  return (
   
   <BrowserRouter>
      <Header/>
       <Switch>
        {/* <Route path='/' exact component={Main}/> */}
        <Route path='/upload' exact component={Upload}/>
        {/* <Route 
        path='/video/:id'
        render={(props)=>{
          return <Main {...props}/>;
        }}/> */}
        <Main
          // Vids={this.state.Vids}
          // currentVideo={this.state.currentVideo}
          // changeVideo={this.changeVideo} 
        />
        </Switch>
    </BrowserRouter>
      
  );
  }
}


export default App;
