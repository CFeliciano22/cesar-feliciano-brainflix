import './VideoInfo.scss';
import Views from '../../assets/Icon/views.svg';
import Likes from '../../assets/Icon/likes.svg';
// import Post from '../../assets/Icon/add_comment.svg';
// import Avatar from '../../assets/Images/Mohan-muruge.jpg';

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
        {/* <div className='form'>
          <label className='form__label'>JOIN THE CONVERSATION</label>
          <div className='form__input-container'>
          <input className='form__input' name='comment' for='comment' placeholder='Add a new comment'/>
          <button className='form__button'>COMMENT</button>
          </div>
          <img className='form__comment-icon' src={Post} alt='post'/>
          <img className='form__avatar' src={Avatar} alt='avatar'/>
        </div> */}
        </div>
      )
  
  }
    
     