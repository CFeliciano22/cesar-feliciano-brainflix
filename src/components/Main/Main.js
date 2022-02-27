import CurrentVideo from "../CurrentVideo/CurrentVideo";
import VideoList from "../VideoList/VideoList";

export default function Main({Vids, currentVideo, changeVideo}){
    return(
        <>
            <CurrentVideo
                currentVideo={currentVideo}
            />
            <VideoList
                Vids={Vids}
                currentVideo={currentVideo}
                changeVideo={changeVideo}
            />
        </>
    )
}