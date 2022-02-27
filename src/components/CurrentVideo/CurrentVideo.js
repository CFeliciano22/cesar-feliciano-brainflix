import './CurrentVideo.scss';
import Views from '../../assets/Icon/views.svg';
import Likes from '../../assets/Icon/likes.svg';
import Post from '../../assets/Icon/add_comment.svg';
import Avatar from '../../assets/Images/Mohan-muruge.jpg';

 
export default function CurrentVideo({ currentVideo}){
  return (
    <div className='main-container'>
        <video className='video' poster={currentVideo.image} controls> </video>
        <div className='video__content-container'>
        <h1 className='video__title'>{currentVideo.title}</h1>
        <div className='video__props-container'>
        <div>
        <p className='video__props--channel'>By {currentVideo.channel}</p>
        <p className='video__props--date'>{currentVideo.timestamp}</p>
        </div>
        <div>
        <p className='video__props--views'><img className="video__props--views-image" src={Views} alt='views'/> {currentVideo.views}</p>
        <p className='video__props--likes'><img className="video__props--likes-image" src={Likes} alt='likes'/>{currentVideo.likes}</p>
        </div>
        </div>
        <p className='video__description'>{currentVideo.description}</p>
        <p className='video__comments'>3 Comments</p>
        </div>
      <div className='form-container'>
        <label className='form__label'>JOIN THE CONVERSATION</label>
        <input className='form__input' name='comment' for='comment' placeholder='Add a new comment'/>
        <button className='form__button'>COMMENT</button>
        <img className='form__comment-icon' src={Post} alt='post'/>
        <img className='form__avatar' src={Avatar} alt='avatar'/>
      </div>
      <ul className='comments'>
          <li className='comments-list comments-list__border-top'>
            <div className='comments-list__item'>
                <h3 className='comments-list__item--name'>{currentVideo.comments[0].name}</h3>
                <p className='comments-list__item--date'>{ new Date (currentVideo.comments[0].timestamp).toLocaleDateString()}</p>
            </div>
                <p className='comments-list__item--comment'>{currentVideo.comments[0].comment}</p>
                <img className='comments-list__item--avatar'/>
          </li>
          <li className='comments-list'>
            <div className='comments-list__item'>
                <h3 className='comments-list__item--name'>{currentVideo.comments[1].name}</h3>
                <p className='comments-list__item--date'>{new Date (currentVideo.comments[1].timestamp).toLocaleDateString()}</p>
            </div>
                <p className='comments-list__item--comment'>{currentVideo.comments[1].comment}</p>
                <img className='comments-list__item--avatar'/>
          </li>
          <li className='comments-list'>
            <div className='comments-list__item'>
                <h3 className='comments-list__item--name'>{currentVideo.comments[2].name}</h3>
                <p className='comments-list__item--date'>{new Date (currentVideo.comments[2].timestamp).toLocaleDateString()}</p>
            </div>
                <p className='comments-list__item--comment'>{currentVideo.comments[2].comment}</p>
                <img className='comments-list__item--avatar'/>
          </li>
      </ul>
      </div>
    )

}
  
   