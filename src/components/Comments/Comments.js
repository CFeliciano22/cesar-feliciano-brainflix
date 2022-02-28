import './Comments.scss';


export default function Comments({ currentVideo}){
    return (
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
    )}