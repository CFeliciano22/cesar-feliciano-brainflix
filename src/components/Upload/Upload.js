import './Upload.scss';
import Thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import Icon from '../../assets/Icon/publish.svg';


export default function Video(){
    return(
        
            <div className='upload'>
                <h1 className='upload__title'>Upload Video</h1>
                <div className='upload__content-container'>
                <div className='upload__thumbnail'>
                    <p className='upload__thumbnail--label'>VIDEO THUMBNAIL</p>
                    <img className='upload__thumbnail--image' src={Thumbnail} alt='thumbnail'/>
                </div>
                <div>
                    <form className='upload__form'>
                        <label className='upload__form--label'>TITLE YOUR VIDEO</label>
                        <input className='upload__form--input upload__form--title' type='text' placeholder='Add a title to your video'/>
                        <label className='upload__form--label'>ADD A VIDEO DESCRIPTION</label>
                        <input className='upload__form--input upload__form--description' type='text' placeholder='Add a description to your video'/>
                        <div className='upload__button'>
                        <button className='upload__button--publish'>PUBLISH</button>
                        <img  className='upload__button--icon' src={Icon} alt='publish svg'/>
                        <button className='upload__button--cancel'>CANCEL</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        
    )
}