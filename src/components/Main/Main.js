import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoList from "../VideoList/VideoList";
import Comments from "../Comments/Comments";
import './Main.scss'
import Form from "../Form/Form";
export default function Main({Vids, currentVideo, changeVideo}){
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
                currentVideo={currentVideo}
            />
            </div> 
            <VideoList
                Vids={Vids}
                currentVideo={currentVideo}
                changeVideo={changeVideo}
            />
        </div>
        </>
    )
}