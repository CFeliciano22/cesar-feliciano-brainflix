import './CurrentVideo.scss';
// import Views from '../../assets/Icon/views.svg';
// import Likes from '../../assets/Icon/likes.svg';
// import Post from '../../assets/Icon/add_comment.svg';
// import Avatar from '../../assets/Images/Mohan-muruge.jpg';

 
export default function CurrentVideo({ currentVideo}){
  return (
    <div className='main-container'>
        <video className='video' poster={currentVideo.image} controls> </video>
      </div>
    )

}
  
   