import React from "react";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoList from "../VideoList/VideoList";
import Comments from "../Comments/Comments";
import './Main.scss'
import Form from "../Form/Form";
// import axios from "axios";

// const Url ='https://project-2-api.herokuapp.com/videos/';
// const ApiKey = '?api_key=cb37a238-0bd0-4f02-9855-6ae33c69f64d/';

//     class Main extends React.Component {
//         state = {
//           Vids: [],
//           currentVideo: {},
//           comments:[]
//         }
        
//         getVideoById = (id) => {
//             axios
//                 .get(`${Url}${id}${ApiKey}`)
//                 .then(response => {
//                     console.log(response.data)
//                     this.setState({
//                         currentVideo: response.data,
//                         comments:response.data.comments
                        
//                     })
//                 })
//                 .catch(err => console.log(err))
//         }

//         componentDidMount(){
//         axios.get(Url + ApiKey).then ((response)=>{
//             console.log(response.data)
//             this.setState({
//                 Vids:response.data
//             })
//             const videoId =  this.props.match.params.id ||  response.data[0].id 
//             this.getVideoById(videoId);
//         })
//         }

// componentDidUpdate(prevProps,prevState){
//     const videoId =  this.props.match.params.id || this.state.Vids[0].id 
//     console.log(videoId)
//     if (prevState.currentVideo && prevState.currentVideo.id !== videoId){
//         this.getVideoById(videoId)
//     }
// }
function Main(currentVideo, Vids, comments){
    
    return(
        <>
        <CurrentVideo
                currentVideo={currentVideo}
            />
        <div className="main-container">
           <div className="main-small-container">
            <VideoInfo
                currentVideo={currentVideo}
            />
            <Form
                currentVideo={currentVideo}
            />
            <Comments
                comments={comments}
            />
            </div> 
            <div className="video-list-container">
            <VideoList
                Vids={Vids}
                currentVideo={currentVideo}
            />
            </div>
        </div>
        </>
    )

    }
    
    export default Main;