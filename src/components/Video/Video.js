import './Video.scss';

export default function Video ({ id, title, channel, image, changeVideo}){
    return(
        <li className="video-list__items">
        <a className='video-list__item' onClick={() => {
            changeVideo(id)
        }} href='#root'>
            <img className="video-list__item--image" src={image} alt="videoimage"/>
            <div className="video-list__item--text-container">
            <h3 className="video-list__item--title">{title}</h3>
            <p className="video-list__item--channel">{channel}</p>
            </div>
            </a>
        </li>
    )
}

