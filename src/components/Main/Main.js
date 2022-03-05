import React from "react";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoList from "../VideoList/VideoList";
import Comments from "../Comments/Comments";
import './Main.scss'
import Form from "../Form/Form";
import Vids from '../../data/video-details.json';
// import axios from "axios";

// const Url ='https://project-2-api.herokuapp.com/videos/'
// const ApiKey = '?api_key=cb37a238-0bd0-4f02-9855-6ae33c69f64d';


//  export default function Main({Vids, currentVideo, changeVideo}){
    class Main extends React.Component {
        state = {
          Vids: Vids,
          currentVideo: Vids[0]
        }

// componentDidMount(){
// axios.get(Url + ApiKey).then ((response)=>{
//     console.log(response.data)
//     this.setState({
//         Vids:response.data,
//     })
//     axios.get(Url + this.state.Vids[0].id + ApiKey).then ((response)=>{
//         this.setState({
//             currentVideo:response.data
            
//         })
//     })
// })
// }
// componentDidUpdate(props){
//     console.log(this.props.match);
// }

      changeVideo = (id) => {
        const newVideoId = this.state.Vids.findIndex(video => id === video.id)
        this.setState({
          currentVideo:this.state.Vids[newVideoId]
        })
      }
      render(){
    return(
        <>
        <CurrentVideo
                currentVideo={this.state.currentVideo}
            />
        <div className="main-container">
           <div className="main-small-container">
            <VideoInfo
                currentVideo={this.state.currentVideo}
            />
            <Form
                currentVideo={this.state.currentVideo}
            />
            <Comments
                Vids={this.state.Vids}
                currentVideo={this.state.currentVideo}
            />
            </div> 
            <div className="video-list-container">
            <VideoList
                Vids={this.state.Vids}
                currentVideo={this.state.currentVideo}
                changeVideo={this.changeVideo}
            />
            </div>
        </div>
        </>
    )
}}
   
export default Main;