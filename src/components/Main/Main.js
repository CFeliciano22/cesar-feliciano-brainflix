import React from "react";
import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoList from "../VideoList/VideoList";
import Comments from "../Comments/Comments";
import './Main.scss'
import Form from "../Form/Form";

function Main({currentVideo, Vids, comments}){
    
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