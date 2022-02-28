import './VideoInfo.scss';
import Views from '../../assets/Icon/views.svg';
import Likes from '../../assets/Icon/likes.svg';


export default function VideoInfo({ currentVideo}){
    return (
      <div className='main-container'>
          <div className='video__content-container'>
          <h1 className='video__title'>{currentVideo.title}</h1>
          <div className='video__props'>
          <div className='video__props--first'>
          <p className='video__props--channel'>By {currentVideo.channel}</p>
          <p className='video__props--date'>{new Date (currentVideo.timestamp).toLocaleDateString()}</p>
          </div>
          <div className='video__props--first'>
          <p className='video__props--views'><img className="video__props--views-image" src={Views} alt='views'/> {currentVideo.views}</p>
          <p className='video__props--likes'><img className="video__props--likes-image" src={Likes} alt='likes'/>{currentVideo.likes}</p>
          </div>
          </div>
          <p className='video__description'>{currentVideo.description}</p>
          <p className='video__comments'>3 Comments</p>
          </div>
        </div>
      )
  
  }
    
     