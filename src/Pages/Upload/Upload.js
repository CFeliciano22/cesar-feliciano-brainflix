import './Upload.scss';
import Thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import Icon from '../../assets/Icon/publish.svg';
import{Component} from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


export default class Upload extends Component{
    state = {
        submit: false
    }

    submitEvent = (e) =>{
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.title.value;
        if(title && description){
            alert('Video was uploaded successfully!');
            this.setState({submit:true})
        }else {
            alert('Please fill out details!')
        }
    }
    
    render(){
        if ( this.state.submit){
            return <Redirect to='/'/>
        }


    return(
        
            <div className='upload'>
                <h1 className='upload__title'>Upload Video</h1>
                <div className='upload__content-container'>
                <div className='upload__thumbnail'>
                    <p className='upload__thumbnail--label'>VIDEO THUMBNAIL</p>
                    <img className='upload__thumbnail--image' src={Thumbnail} alt='thumbnail'/>
                </div>
                <div className='upload__container'>
                    <form className='upload__form' onSubmit={this.submitEvent} >
                        <label className='upload__form--label'>TITLE YOUR VIDEO</label>
                        <input className='upload__form--input upload__form--title' name='title' type='text' placeholder='Add a title to your video'/>
                        <label className='upload__form--label upload__form--label-description'>ADD A VIDEO DESCRIPTION</label>
                        <input className='upload__form--input upload__form--description' name='description' type='text' placeholder='Add a description to your video'/>
                        <div className='upload__button'>
                        <button type='submit'className='upload__button--publish'>PUBLISH</button>
                        <img  className='upload__button--icon' src={Icon} alt='publish svg'/>
                        <button className='upload__button--cancel'>CANCEL</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        
    )
}
}