import './Video.scss';
import { Link } from 'react-router-dom';

export default function Video ({ id, title, channel, image}){
    return(
        <li className="video-list__items">
        <Link to={`/video/${id}`} className='video-list__item' onClick={window.scroll({top:0, left:0, behavior:"smooth"})}>
            <img className="video-list__item--image" src={image} alt="videoimage"/>
            <div className="video-list__item--text-container">
            <h3 className="video-list__item--title">{title}</h3>
            <p className="video-list__item--channel">{channel}</p>
            </div>
            </Link>
        </li>
    )
}

