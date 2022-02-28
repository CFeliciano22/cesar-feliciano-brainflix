import './CurrentVideo.scss';

 
export default function CurrentVideo({ currentVideo}){
  return (
    <div className='main-container'>
        <video className='video' poster={currentVideo.image} controls> </video>
      </div>
    )

}
  
   